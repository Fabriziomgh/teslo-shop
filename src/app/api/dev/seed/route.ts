import { NextRequest, NextResponse } from 'next/server';

import { initialData } from '@/seed/seed';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
   try {
      // 1. Borrar todos los datos de las tablas
      //   await Promise.all([
      //      prisma.productImage.deleteMany(),
      //      prisma.product.deleteMany(),
      //      prisma.category.deleteMany(),
      //   ]);

      await prisma.productImage.deleteMany();
      await prisma.product.deleteMany();
      await prisma.category.deleteMany();

      const { categories, products } = initialData;

      // 2. Insertar categorias
      const categoriData = categories.map((name) => ({ name }));
      await prisma.category.createMany({
         data: categoriData,
      });
      // 3. Obteniendo los UUIDS de las categorias
      const categoriesDB = await prisma.category.findMany();
      const categoriesMap = categoriesDB.reduce((map, cat) => {
         map[cat.name.toLowerCase()] = cat.id;
         return map;
      }, {} as Record<string, string>);

      // 4. Insertando productos
      products.forEach(async (product) => {
         const { type, images, ...rest } = product;

         const productDB = await prisma.product.create({
            data: {
               ...rest,
               categoryId: categoriesMap[type],
            },
         });

         const imagesData = images.map((image) => ({
            url: image,
            productId: productDB.id,
         }));

         await prisma.productImage.createMany({
            data: imagesData,
         });
      });
   } catch (error) {
      console.log(error);
   }

   return NextResponse.json({ message: 'Seed ejecutado correctamente' });
}

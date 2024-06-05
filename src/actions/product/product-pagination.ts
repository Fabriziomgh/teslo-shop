'use server';

import { Product } from '@/interfaces';
import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';

interface PaginationOptions {
   page?: number;
   take?: number;
   gender?: Gender;
}

export const getProductPaginatedWithImages = async ({
   page = 1,
   take = 12,
   gender,
}: PaginationOptions) => {
   if (isNaN(Number(page))) page = 1;
   if (Number(page) < 1) page = 1;
   const skip = (page - 1) * take;

   try {
      const products = await prisma.product.findMany({
         take,
         skip,
         include: {
            ProductImage: {
               take: 2,
               select: {
                  url: true,
               },
            },
         },
         where: {
            gender,
         },
      });

      const totalProduct = await prisma.product.count({
         where: {
            gender,
         },
      });
      const totalProductsPages = Math.ceil(totalProduct / take);

      return {
         currentPage: page,
         totalPages: totalProductsPages,
         products: products.map(({ ProductImage, ...rest }) => ({
            ...rest,
            images: ProductImage.map(({ url }) => url),
         })),
      };
   } catch (error) {
      throw new Error(`${error}`);
   }
};

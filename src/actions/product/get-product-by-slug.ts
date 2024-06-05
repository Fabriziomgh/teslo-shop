import prisma from '@/lib/prisma';

export const getProductBySlug = async (slug: string) => {
   try {
      const product = await prisma.product.findFirst({
         where: { slug },
         include: {
            ProductImage: {
               select: {
                  url: true,
               },
            },
         },
      });

      if (!product) return null;

      const { ProductImage, ...rest } = product;

      return {
         ...rest,
         images: ProductImage.map(({ url }) => url),
      };
   } catch (error) {
      console.log(error);
      throw new Error('Error al cargar el producto');
   }
};

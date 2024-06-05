export const revalidate = 60;

import { redirect } from 'next/navigation';
import { CustomTitle, Pagination, ProductGrid } from '@/components';
import { getProductPaginatedWithImages } from '@/actions';
import { Gender } from '@prisma/client';
import { Metadata } from 'next';
interface Props {
   params: {
      gender: string;
   };
   searchParams: {
      page: string;
   };
}
const labels: Record<string, string> = {
   men: 'Hombres',
   women: 'Mujeres',
   kid: 'Niños',
   unisex: 'Unisex',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { gender } = params;
   const customTitle = labels[gender]
      ? `Prodcutos para ${labels[gender]}`
      : `404`;

   return {
      title: customTitle,
   };
}

export default async function CategoryPage({ params, searchParams }: Props) {
   const { gender } = params;
   const page = searchParams.page ? Number(searchParams.page) : 1;
   const { products, totalPages, currentPage } =
      await getProductPaginatedWithImages({
         page,
         gender: gender as Gender,
      });

   if (products.length === 0) {
      redirect(`/gender/${gender}`);
   }

   return (
      <div>
         <CustomTitle
            title={`Productos para ${labels[gender]}`}
            className="mb-2"
         />
         <ProductGrid products={products} />
         <Pagination totalPages={totalPages} />
      </div>
   );
}

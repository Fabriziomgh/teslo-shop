import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import { CustomTitle, ProductGrid } from '@/components';
import { ValidCategories } from '@/interfaces';
interface Props {
   params: {
      id: ValidCategories;
   };
}
const initialProducts = initialData.products;
const labels: Record<ValidCategories, string> = {
   men: 'Hombres',
   women: 'Mujeres',
   kid: 'Niños',
   unisex: 'Unisex',
};

export default function CategoryPage({ params }: Props) {
   const { id } = params;

   if (!labels[id]) {
      notFound();
   }

   const products = initialProducts.filter((product) => product.gender === id);
   return (
      <div>
         <CustomTitle title={`Productos para ${labels[id]}`} className="mb-2" />
         <ProductGrid products={products} />
      </div>
   );
}

import { ProductGridItem } from '@/components';
import { Product } from '@/interfaces';

interface Props {
   products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
   return (
      <section className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10">
         {products.map((product) => (
            <ProductGridItem key={product.slug} product={product} />
         ))}
      </section>
   );
};

import { CustomTitle, ProductGrid } from '@/components';
import { initialData } from '@/seed/seed';
const products = initialData.products;
export default function ShopPage() {
   return (
      <>
         <CustomTitle
            title="Tienda"
            subtitle="Todos los productos"
            className="mb-2"
         />
         <ProductGrid products={products} />
      </>
   );
}

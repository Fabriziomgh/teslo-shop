import {
   ProductMobileSlideShow,
   ProductSlideShow,
   QuantitySelector,
   SizeSelector,
} from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface Props {
   params: {
      slug: string;
   };
}

export default function ProductPage({ params }: Props) {
   const { slug } = params;
   const product = initialData.products.find(
      (product) => product.slug === slug
   );
   if (!product) {
      notFound();
   }

   return (
      <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
         <div className="col-span-1 md:col-span-2 ">
            {/* Mobile */}
            <ProductMobileSlideShow
               images={product.images}
               title={product.title}
               className="block md:hidden"
            />
            {/* Desktop */}
            <ProductSlideShow
               images={product.images}
               title={product.title}
               className="hidden md:block"
            />
         </div>
         <div className="col-span-1 px-5 ">
            <h1
               className={`${titleFont.className} antialiased font-bold text-xl`}
            >
               {product.title}
            </h1>
            <span className="mb-5 block text-lg font-semibold text-gray-700 ">
               ${product.price}
            </span>
            <SizeSelector
               selectedSize={product.sizes[1]}
               availableSize={product.sizes}
            />
            <QuantitySelector quantity={1} />

            <button className="btn-primary my-5">Agregar al carrito</button>
            <h3 className="font-semibold text-md mb-1">Descripción</h3>
            <p className="text-light">{product.description}</p>
         </div>
      </section>
   );
}

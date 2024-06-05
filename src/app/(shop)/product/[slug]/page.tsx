export const revalidate = 604800;
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductBySlug } from '@/actions';
import {
   ProductMobileSlideShow,
   ProductSlideShow,
   QuantitySelector,
   SizeSelector,
   StockLabel,
} from '@/components';
import { titleFont } from '@/config/fonts';
import { AddToCart } from './ui/AddToCart';

interface Props {
   params: {
      slug: string;
   };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = params;

   const product = await getProductBySlug(slug);

   return {
      title: product?.title ?? '',
      description: product?.description ?? '',
      openGraph: {
         title: product?.title ?? '',
         description: product?.description ?? '',
         images: [`/products/${product?.images[1]}`],
      },
   };
}

export default async function ProductBySlugPage({ params }: Props) {
   const { slug } = params;
   const product = await getProductBySlug(slug);

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
            <StockLabel slug={product.slug} />
            <h1
               className={`${titleFont.className} antialiased font-bold text-xl`}
            >
               {product.title}
            </h1>
            <span className="mb-5 block text-lg font-semibold text-gray-700 ">
               ${product.price}
            </span>
            <AddToCart product={product} />
            <h3 className="font-semibold text-md mb-1">Descripción</h3>
            <p className="text-light">{product.description}</p>
         </div>
      </section>
   );
}

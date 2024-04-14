'use client';

import { titleFont } from '@/config/fonts';
import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
   return (
      <div className="rounded-md overflow-hidden fade-in">
         <Link href={`/product/${product.slug}`}>
            <Image
               src={`/products/${product.images[0]}`}
               alt={product.title}
               className="object-cover w-full "
               width={500}
               height={500}
            />
         </Link>
         <div className="flex flex-col p-4">
            <Link
               className={`${titleFont.className} tracking-tight antialiased hover:underline text-md hover:text-blue-500 text-opacity-95`}
               href={`/product/${product.slug}`}
            >
               {product.title}
            </Link>
            <span className="font-semibold">${product.price}</span>
         </div>
      </div>
   );
};

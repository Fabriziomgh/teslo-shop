'use client';

import { QuantitySelector } from '@/components';
import { useCartStore } from '@/store';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components';

export const ProductsInCart = () => {
   const productsInCart = useCartStore((state) => state.cart);
   const removeProduct = useCartStore((state) => state.removeProduct);
   const updateProductQuantity = useCartStore(
      (state) => state.updateProductQuantity
   );
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
   }, []);

   if (!loading) {
      return <Skeleton />;
   }

   return (
      <>
         {productsInCart.map((product) => (
            <div
               key={`${product.slug}+${product.size}`}
               className="flex gap-x-4 mb-2 w-full"
            >
               <Image
                  width={100}
                  height={100}
                  alt={product.title}
                  src={`/products/${product.image}`}
                  className="object-cover rounded shadow"
               />
               <div className="">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-6">
                     <span className="text-lg">{product.title}</span>
                     <span className="text-gray-700 font-semibold ">
                        ${product.price}
                     </span>
                  </div>
                  <small className="">Size - {product.size}</small>
                  <div className="flex items-center gap-x-6">
                     <QuantitySelector
                        onQuantityChanged={(quantity) =>
                           updateProductQuantity(product, quantity)
                        }
                        quantity={product.quantity}
                     />
                     <button
                        onClick={() => {
                           removeProduct(product);
                        }}
                        className="underline text-gray-700 "
                     >
                        Remover
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

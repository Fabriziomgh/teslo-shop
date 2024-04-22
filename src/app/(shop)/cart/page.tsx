import { CustomTitle, QuantitySelector } from '@/components';
import { initialData } from '@/seed/seed';

import Link from 'next/link';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';

const productsInCart = [
   initialData.products[0],
   initialData.products[1],
   initialData.products[2],
   initialData.products[3],
];

export default function CartPage() {
   return (
      <section className="max-w-6xl mx-auto mb-72 px-2 lg:px-0 ">
         <div className="w-full text-center lg:text-left">
            <CustomTitle title="Carrito" />
            <Link href="/" className="underline uppercase inline-block mb-6">
               Continúa comprando
            </Link>
         </div>
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col mb-5 w-full lg:w-2/3">
               {productsInCart.map((product) => (
                  <div key={product.slug} className="flex gap-x-4 mb-2 w-full">
                     <Image
                        width={100}
                        height={100}
                        alt={product.title}
                        src={`/products/${product.images[0]}`}
                        className="object-cover rounded shadow"
                     />
                     <div className="">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-6">
                           <span className="text-lg">{product.title}</span>
                           <span className="text-gray-700 font-semibold ">
                              ${product.price}
                           </span>
                        </div>
                        <div className="flex items-center gap-x-6">
                           <QuantitySelector quantity={3} />
                           <button className="underline text-gray-700 ">
                              Remover
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-white w-full h-1/3 lg:w-1/3 flex flex-col shadow-md p-7 ">
               <h2
                  className={`${titleFont.className} text-2xl mb-2 font-semibold`}
               >
                  Resumen de la Orden
               </h2>
               <div className="grid grid-cols-2">
                  <span className="text-lg text-gray-700 ">
                     Productos totales:
                  </span>
                  <span className="text-lg text-gray-700 text-right font-bold">
                     2
                  </span>

                  <span className="text-lg text-gray-700 ">Subtotal:</span>
                  <span className="text-lg text-gray-700 text-right font-bold">
                     $100
                  </span>

                  <span className="text-lg text-gray-700 ">
                     Impuestos (15%):
                  </span>
                  <span className="text-lg text-gray-700 text-right font-bold">
                     $100
                  </span>

                  <span className="text-xl font-bold mt-5 text-gray-700 ">
                     Total:
                  </span>
                  <span className="text-lg mt-5 text-gray-700 text-right font-bold">
                     $200
                  </span>
               </div>
               <div className="mt-5 mb-2 w-full">
                  <Link
                     href="/checkout/address"
                     className="flex justify-center btn-primary"
                  >
                     Pagar
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}

import { CustomTitle, QuantitySelector } from '@/components';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';

const productsInCart = [initialData.products[0], initialData.products[1]];

export default function CheckoutPage() {
   return (
      <section className="max-w-6xl mx-auto mb-72 px-2 lg:px-0 ">
         <div className="w-full text-center lg:text-left">
            <CustomTitle title="Verificación de la Orden" />
            <Link
               href="/cart"
               className="underline uppercase inline-block mb-6"
            >
               Ir al Carrito
            </Link>
         </div>
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col mb-5 w-full lg:w-3/5">
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
                              ${product.price} x 3
                           </span>
                        </div>
                        <div className="">
                           <span className="font-bold text-gray-700">
                              Subtotal: ${product.price * 3}
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-white lg:-mt-20 w-full h-1/3 lg:w-2/5 flex flex-col shadow-md p-7 ">
               <div>
                  <h2 className={` text-2xl mb-3 font-semibold`}>
                     Verificación de entrega
                  </h2>
                  <div className="grid grid-cols-2">
                     <span className="text-lg text-gray-700 ">Nombres:</span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        Fabrizio Gutierrez
                     </span>

                     <span className="text-lg text-gray-700 ">Dirección:</span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        Las Margaritas
                     </span>

                     <span className="text-lg text-gray-700 ">Ciudad:</span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        Punto Fijo
                     </span>

                     <span className="text-lg text-gray-700 ">País:</span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        Venezuela
                     </span>
                     <span className="text-lg text-gray-700 ">
                        Código postal:
                     </span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        4102
                     </span>
                     <span className="text-lg text-gray-700 ">Teléfono:</span>
                     <span className="text-lg text-gray-700 text-right font-bold">
                        04126666666
                     </span>
                  </div>
               </div>

               <div className="my-6 bg-gray-300 h-0.5 rounded" />
               <h2 className={` text-2xl mb-2 font-semibold`}>
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
                     href="/orders/123"
                     className="flex justify-center btn-primary"
                  >
                     Confirmar Orden
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}

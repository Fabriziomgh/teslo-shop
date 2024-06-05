import { CustomTitle } from '@/components';

import Link from 'next/link';
import { titleFont } from '@/config/fonts';
import { ProductsInCart } from './ui/ProductsInCart';
import { OrderSummary } from './ui/OrderSummary';

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
            <div className="flex flex-col mb-5 w-full lg:w-1/2">
               <ProductsInCart />
            </div>

            <div className="bg-white w-full lg:-mt-16 h-1/3 lg:w-1/2 flex flex-col shadow-md p-7 ">
               <h2
                  className={`${titleFont.className} text-2xl mb-2 font-semibold`}
               >
                  Resumen de la Orden
               </h2>
               <OrderSummary />
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

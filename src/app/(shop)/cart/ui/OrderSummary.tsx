'use client';

import { Skeleton } from '@/components';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';

export const OrderSummary = () => {
   const [loading, setLoading] = useState(false);
   const { total, totalItems, impuestos, subTotal } = useCartStore((state) =>
      state.getSummaryInformation()
   );

   useEffect(() => {
      setLoading(true);
   }, []);

   if (!loading) {
      return <Skeleton />;
   }

   return (
      <div className="grid grid-cols-2">
         <span className="text-lg text-gray-700 ">Productos totales:</span>
         <span className="text-lg text-gray-700 text-right font-bold">
            {totalItems}
         </span>

         <span className="text-lg text-gray-700 ">Subtotal:</span>
         <span className="text-lg text-gray-700 text-right font-bold">
            {currencyFormat(subTotal)}
         </span>

         <span className="text-lg text-gray-700 ">Impuestos (15%):</span>
         <span className="text-lg text-gray-700 text-right font-bold">
            {currencyFormat(impuestos)}
         </span>

         <span className="text-xl font-bold mt-5 text-gray-700 ">Total:</span>
         <span className="text-lg mt-5 text-gray-700 text-right font-bold">
            {currencyFormat(total)}
         </span>
      </div>
   );
};

'use client';

import { getStockBySlug } from '@/actions';
import { titleFont } from '@/config/fonts';
import { useEffect, useState } from 'react';

interface Props {
   slug: string;
}

export const StockLabel = ({ slug }: Props) => {
   const [stock, setStock] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   const getStock = async () => {
      const productStock = await getStockBySlug(slug);
      setStock(productStock);
      setIsLoading(false);
   };

   useEffect(() => {
      getStock();
   }, []);

   if (isLoading) {
      return <div className="animate-pulse bg-gray-300 h-[24px] mb-1 "></div>;
   }

   return (
      <>
         <span
            className={`${titleFont.className} mb-1 block antialiased  text-md font-semibold`}
         >
            Stock: {stock}
         </span>
      </>
   );
};

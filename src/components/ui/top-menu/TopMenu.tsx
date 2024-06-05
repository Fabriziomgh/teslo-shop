'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { useCartStore, useUIStore } from '@/store';
import { titleFont } from '@/config/fonts';
import { useEffect, useState } from 'react';
export const TopMenu = () => {
   const openSideMenu = useUIStore((state) => state.openSideMenu);
   const totalQuantity = useCartStore((state) => state.getTotalQuantity());
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
   }, []);

   return (
      <nav className="flex items-center justify-between py-2 px-5 w-full ">
         <div>
            <Link href="/">
               <span className={`${titleFont.className} antialiased font-bold`}>
                  Teslo
               </span>
               <span> | Shop</span>
            </Link>
         </div>
         <div className="hidden md:block">
            <div className="flex space-x-2  ">
               <Link href="/gender/men" className="p-2 hover:underline  ">
                  Hombres
               </Link>
               <Link href="/gender/women" className="p-2 hover:underline ">
                  Mujeres
               </Link>
               <Link href="/gender/kid" className="p-2 hover:underline ">
                  Niños
               </Link>
            </div>
         </div>
         <div className="flex items-center space-x-3">
            <Link href="/search">
               <IoSearchOutline size={30} />
            </Link>
            <Link href={loading && totalQuantity === 0 ? '/empty' : '/cart'}>
               <div className="relative">
                  {loading && totalQuantity > 0 && (
                     <span className="absolute -top-1 -right-1 font-bold bg-blue-500 text-white text-xs rounded-full px-1 ">
                        {totalQuantity}
                     </span>
                  )}
                  <IoCartOutline size={30} />
               </div>
            </Link>
         </div>
         <button
            className="p-2 transition-colors rounded-md hover:bg-gray-200"
            onClick={openSideMenu}
         >
            Menú
         </button>
      </nav>
   );
};

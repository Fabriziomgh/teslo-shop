'use client';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';
import { titleFont } from '@/config/fonts';
export const TopMenu = () => {
   const openSideMenu = useUIStore((state) => state.openSideMenu);
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
               <Link href="/category/men" className="p-2 hover:underline  ">
                  Hombres
               </Link>
               <Link href="/category/women" className="p-2 hover:underline ">
                  Mujeres
               </Link>
               <Link href="/category/kid" className="p-2 hover:underline ">
                  Niños
               </Link>
            </div>
         </div>
         <div className="flex items-center space-x-3">
            <Link href="/search">
               <IoSearchOutline size={30} />
            </Link>
            <Link href="/cart">
               <div className="relative">
                  <span className="absolute -top-1 -right-1 font-bold bg-blue-500 text-white text-xs rounded-full px-1 ">
                     3
                  </span>
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

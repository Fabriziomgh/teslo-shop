'use client';

import Link from 'next/link';
import {
   IoCloseOutline,
   IoLogInOutline,
   IoLogOutOutline,
   IoPersonOutline,
   IoSearchOutline,
   IoShirtOutline,
   IoTicketOutline,
} from 'react-icons/io5';
import { clsx } from 'clsx';

import { useUIStore } from '@/store';

export const Sidebar = () => {
   const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
   const closeSideMenu = useUIStore((state) => state.closeSideMenu);

   return (
      <div>
         {/* Background */}
         {isSideMenuOpen && (
            <div className="fixed top-0 left-0 h-screen w-screen z-10 bg-black opacity-30" />
         )}

         {/* blur */}
         {isSideMenuOpen && (
            <div
               className="fade-in fixed top-0 left-0 h-screen w-screen z-10 backdrop-filter backdrop-blur-sm"
               onClick={closeSideMenu}
            />
         )}

         {/* sidemenu */}
         <nav
            className={clsx(
               'fixed p-5 right-0 top-0 bg-white w-[400px] rounded-tl rounded-bl h-screen z-20 shadow transform transition-all duration-150',
               {
                  'translate-x-full': !isSideMenuOpen,
               }
            )}
         >
            <IoCloseOutline
               size={45}
               className="absolute right-5 top-5 cursor-pointer"
               onClick={closeSideMenu}
            />
            {/* input */}
            <div className="relative mt-14">
               <IoSearchOutline size={20} className="absolute top-2 left-2" />
               <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
               />
            </div>
            {/* menu */}
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoPersonOutline size={30} />
               <span>Perfil</span>
            </Link>
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoTicketOutline size={30} />
               <span>Ordenes</span>
            </Link>
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoLogInOutline size={30} />
               <span>Ingresar</span>
            </Link>
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoLogOutOutline size={30} />
               <span>Salir</span>
            </Link>

            <div className="w-full h-[2px] bg-gray-300 my-8" />
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoShirtOutline size={30} />
               <span>Productos</span>
            </Link>
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoTicketOutline size={30} />
               <span>Ordenes</span>
            </Link>
            <Link
               href="/"
               className="flex gap-2 items-center rounded p-2 mt-6 hover:bg-gray-100 transition-all"
            >
               <IoPersonOutline size={30} />
               <span>Clientes</span>
            </Link>
         </nav>
      </div>
   );
};

'use client';

import { generatePaginationNumber } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Props {
   totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
   const pathName = usePathname();
   const searhParams = useSearchParams();
   const pageString = Number(searhParams.get('page')) ?? 1;
   let currentPage = isNaN(+pageString) ? 1 : +pageString;
   if (currentPage < 1) {
      currentPage = 1;
   }

   const allPages = generatePaginationNumber(currentPage, totalPages);

   const createPageUrl = (pageNumber: number | string) => {
      const params = new URLSearchParams(searhParams);

      if (pageNumber === '...') {
         return `${pathName}?${params.toString()}`;
      }

      if (+pageNumber <= 0) {
         return `${pathName}`;
      }

      if (+pageNumber > totalPages) {
         return `${pathName}?${params.toString()}`;
      }

      params.set('page', pageNumber.toString());

      return `${pathName}?${params.toString()}`;
   };

   return (
      <ol className="mt-10 mb-20 flex justify-center gap-1 text-xs font-medium">
         <li>
            <Link
               href={createPageUrl(currentPage - 1)}
               className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
            >
               <IoChevronBackOutline size={25} />
            </Link>
         </li>

         {allPages.map((page, i) => (
            <li key={i}>
               <Link
                  href={createPageUrl(page)}
                  className={clsx(
                     'block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900',
                     {
                        'block size-8 rounded border-blue-600 bg-blue-500 text-center leading-8 text-white':
                           page === currentPage,
                     }
                  )}
               >
                  {page}
               </Link>
            </li>
         ))}

         <li>
            <Link
               href={createPageUrl(currentPage + 1)}
               className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
            >
               <IoChevronForwardOutline size={25} />
            </Link>
         </li>
      </ol>
   );
};

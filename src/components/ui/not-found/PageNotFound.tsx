import Link from 'next/link';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
   return (
      <div className="flex flex-col-reverse md:flex-row h-[600px] w-full justify-center items-center align-middle">
         <div className="text-center px-5 mx-5">
            <h2
               className={`${titleFont.className} antialiased text-7xl md:text-9xl `}
            >
               404
            </h2>
            <p className="font-bold text-xl">Whoooops! Lo sentimos mucho.</p>
            <p className="font-light">
               Puedes regresar al
               <Link href="/" className="font-normal ml-1 hover:underline">
                  inicio
               </Link>
            </p>
         </div>
         <div className="mx-5">
            <Image
               src="/imgs/starman_750x750.png"
               alt="StarMan"
               height={550}
               width={550}
            />
         </div>
      </div>
   );
};

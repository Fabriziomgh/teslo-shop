import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export default function NewAccountPage() {
   return (
      <section className="flex flex-col min-h-screen py-20 px-10 sm:px-0 sm:py-24">
         <h1 className={`${titleFont.className} antialiased text-4xl mb-5`}>
            Nueva Cuenta
         </h1>

         <div className="flex flex-col">
            <label htmlFor="email">Nombre</label>
            <input
               className="px-5 py-2 border bg-gray-200 rounded mb-5"
               type="text"
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
               className="px-5 py-2 border bg-gray-200 rounded mb-5"
               type="email"
            />

            <label htmlFor="email">Contraseña</label>
            <input
               className="px-5 py-2 border bg-gray-200 rounded mb-5"
               type="email"
            />

            <button className="btn-primary">Ingresar</button>

            {/* divisor l ine */}
            <div className="flex items-center my-5">
               <div className="flex-1 border-t border-gray-500"></div>
               <div className="px-2 text-gray-800">O</div>
               <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link href="/auth/login" className="btn-secondary text-center">
               Ingresar
            </Link>
         </div>
      </section>
   );
}

import { titleFont } from '@/config/fonts';

interface Props {
   title: string;
   subtitle?: string;
   className: string;
}

export const CustomTitle = ({ title, subtitle, className }: Props) => {
   return (
      <div className={`mb-2 ${className}`}>
         <h1
            className={`${titleFont.className} text-4xl antialiased font-semibold my-8`}
         >
            {title}
         </h1>
         {subtitle && <h3 className="text-xl mb-5 ">{subtitle}</h3>}
      </div>
   );
};

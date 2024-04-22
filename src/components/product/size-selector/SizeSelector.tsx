import type { ValidSizes } from '@/interfaces';
import clsx from 'clsx';

interface Props {
   selectedSize: ValidSizes;
   availableSize: ValidSizes[];
}

export const SizeSelector = ({ selectedSize, availableSize }: Props) => {
   return (
      <div className="my-5 ">
         <h3 className="font-bold mb-4">Tallas disponibles</h3>
         <div className="flex space-x-4">
            {availableSize.map((size) => (
               <button
                  key={size}
                  className={clsx(' hover:underline text-lg', {
                     ['underline']: size === selectedSize,
                  })}
               >
                  {size}
               </button>
            ))}
         </div>
      </div>
   );
};

'use client';

import { IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';

interface Props {
   quantity: number;
   onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
   const onValueChanged = (value: number) => {
      if (quantity + value < 1) return;

      onQuantityChanged(quantity + value);
   };

   return (
      <div>
         <h3 className="mb-2 text-md font-semibold">Cantidad</h3>
         <div className="flex items-center gap-x-2">
            <button onClick={() => onValueChanged(-1)}>
               <IoRemoveCircleOutline size={25} />
            </button>
            <span className="w-4  text-center">{quantity}</span>
            <button onClick={() => onValueChanged(+1)}>
               <IoAddCircleOutline size={25} />
            </button>
         </div>
      </div>
   );
};

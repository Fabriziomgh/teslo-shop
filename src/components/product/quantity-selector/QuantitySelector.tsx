'use client';

import { useState } from 'react';
import { IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';

interface Props {
   quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
   const [count, setCount] = useState(quantity);

   const onQuantityChange = (value: number) => {
      if (count + value < 1) return;

      setCount((prevCount) => prevCount + value);
   };

   return (
      <div>
         <h3 className="mb-2 text-md font-semibold">Cantidad</h3>
         <div className="flex items-center gap-x-2">
            <button onClick={() => onQuantityChange(-1)}>
               <IoRemoveCircleOutline size={25} />
            </button>
            <span className="w-4  text-center">{count}</span>
            <button onClick={() => onQuantityChange(+1)}>
               <IoAddCircleOutline size={25} />
            </button>
         </div>
      </div>
   );
};

'use client';

import { toast } from 'sonner';
import { useCartStore } from '@/store';
import { QuantitySelector, SizeSelector } from '@/components';
import type { CartProduct, Product, ValidSizes } from '@/interfaces';
import { useState } from 'react';

interface Props {
   product: Product;
}

export const AddToCart = ({ product }: Props) => {
   const addProductToCart = useCartStore((state) => state.addProductToCart);
   const [size, setSize] = useState<ValidSizes | undefined>();
   const [quantity, setQuantity] = useState<number>(1);
   const [isSizeSelected, setIsSizeSelected] = useState(false);

   const addToCart = () => {
      setIsSizeSelected(true);
      if (!size) return;

      const productCart: CartProduct = {
         id: product.id,
         slug: product.slug,
         title: product.title,
         size: size,
         price: product.price,
         quantity: quantity,
         image: product.images[0],
      };
      addProductToCart(productCart);
      setSize(undefined);
      setQuantity(1);
      setIsSizeSelected(false);
      toast.info(
         `Producto "${productCart.title}" Size "${productCart.size}" Agregado al Carrito`
      );
   };

   return (
      <>
         {isSizeSelected && !size && (
            <small className="text-red-400 fade-in ">
               * Por favor, seleccione una talla
            </small>
         )}

         <SizeSelector
            onSizeChange={(size) => {
               setSize(size);
            }}
            selectedSize={size}
            availableSize={product.sizes}
         />
         <QuantitySelector
            onQuantityChanged={(quantity) => {
               setQuantity(quantity);
            }}
            quantity={quantity}
         />

         <button onClick={addToCart} className="btn-primary my-5 text-pretty">
            Agregar al carrito
         </button>
      </>
   );
};

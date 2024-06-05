import type { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
   cart: CartProduct[];

   getTotalQuantity: () => number;
   getSummaryInformation: () => {
      subTotal: number;
      impuestos: number;
      total: number;
      totalItems: number;
   };
   addProductToCart: (product: CartProduct) => void;
   updateProductQuantity: (product: CartProduct, quantity: number) => void;
   removeProduct: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
   persist(
      (set, get) => ({
         cart: [],

         getTotalQuantity: () => {
            const { cart } = get();
            const total = cart.reduce((previusTotal, product) => {
               return previusTotal + product.quantity;
            }, 0);

            return total;
         },
         getSummaryInformation: () => {
            const { cart } = get();
            const subTotal = cart.reduce(
               (subTotal, product) =>
                  subTotal + product.quantity * product.price,
               0
            );
            const impuestos = subTotal * 0.15;
            const total = subTotal + impuestos;
            const totalItems = cart.reduce((totalProducts, product) => {
               return totalProducts + product.quantity;
            }, 0);
            return {
               subTotal,
               impuestos,
               total,
               totalItems,
            };
         },

         addProductToCart: (product: CartProduct) => {
            const { cart } = get();

            const productInCart = cart.some(
               (item) => item.id === product.id && item.size === product.size
            );

            if (!productInCart) {
               return set({ cart: [...cart, product] });
            }

            const updateProductsInCart = cart.map((item) => {
               if (item.id === product.id && item.size === product.size) {
                  return {
                     ...item,
                     quantity: item.quantity + product.quantity,
                  };
               }
               return item;
            });

            set({ cart: updateProductsInCart });
         },
         updateProductQuantity: (product: CartProduct, quantity: number) => {
            const { cart } = get();

            const productsQuantityUpdate = cart.map((item) => {
               if (item.id === product.id && item.size === product.size) {
                  return {
                     ...item,
                     quantity: quantity,
                  };
               }
               return item;
            });
            set({ cart: productsQuantityUpdate });
         },
         removeProduct: (product: CartProduct) => {
            const { cart } = get();
            console.log(product);
            const removedProducts = cart.filter((item) => {
               return item.id !== product.id || item.size !== product.size;
            });
            set({ cart: removedProducts });
         },
      }),
      {
         name: 'shopping-cart',
      }
   )
);

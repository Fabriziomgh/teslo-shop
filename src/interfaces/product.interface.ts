export interface Product {
   id: string;
   description: string;
   images: string[];
   inStock: number;
   price: number;
   sizes: ValidSizes[];
   slug: string;
   tags: string[];
   title: string;
   // type: ValidTypes;
   gender: ValidCategories;
}
export interface CartProduct {
   id: string;
   slug: string;
   title: string;
   size: ValidSizes;
   price: number;
   quantity: number;
   image: string;
}

export type ValidCategories = 'men' | 'women' | 'kid' | 'unisex';
export type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

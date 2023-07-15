import {
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from 'firebase/firestore';
import { db } from '../config/firebase';

import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export enum Categories {
  wedo1 = 'Lego WeDo 1.0',
  wedo2 = 'Lego WeDo 2.0',
  mindstorm = 'Lego Mindstorms',
  others = 'Others',
}

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  category: Categories;
}

const productsRef = collection(db, 'products');

const api = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      async queryFn() {
        try {
          const q = query(productsRef);
          const querySnapshot = (await getDocs(q)) as QuerySnapshot<IProduct>;
          const products = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          return { data: products };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Products'],
    }),
  }),
});

export const productService = {
  getProducts: async () => {
    const q = query(productsRef);
    const querySnapshot = (await getDocs(q)) as QuerySnapshot<IProduct>;
    const products = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return products;
  },

  addProduct: async ({ title, description, price, category }: IProduct) => {
    await addDoc(productsRef, {
      title,
      description,
      price,
      category,
    });
  },

  deleteProduct: async (id: string) => {
    await deleteDoc(doc(db, 'products', id));
  },
};

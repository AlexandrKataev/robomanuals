import {
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export enum Categories {
  wedo1 = 'WeDo 1.0',
  wedo2 = 'WeDo 2.0',
  mindstorm = 'Mindstorms',
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

export const productService = {
  getProducts: async (category: string) => {
    const q =
      category === 'all'
        ? query(productsRef)
        : query(productsRef, where('category', '==', category));
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

  updateProduct: async ({ id, title, description, price, category }: IProduct) => {
    await updateDoc(doc(db, 'products', id as string), {
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

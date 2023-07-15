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

import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { db } from './config/firebase';

type Product = {
  title: string;
  description: string;
  price: number;
  category: 'wedo1' | 'wedo2' | 'wedo3';
};

export const productApi = {
  getProducts: async () => {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  },

  addProduct: async ({ title, description, price, category }: Product) => {
    console.log({ title, description, price, category });
    await addDoc(collection(db, 'products'), {
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

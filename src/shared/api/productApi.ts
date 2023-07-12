import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from './config/firebase';

export const productApi = {
  getProducts: async () => {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs;
  },
};

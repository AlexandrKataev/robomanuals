import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { doc, getDoc } from 'firebase/firestore';

import { auth, db } from './config/firebase';

export const userApi = {
  signUp: async (email: string, password: string, name: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) => console.log(err));
      auth.currentUser &&
        (await sendEmailVerification(auth.currentUser).catch((err) => console.log(err)));
      auth.currentUser &&
        (await updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
          console.log(err),
        ));
    } catch (err) {
      console.log(err);
    }
  },

  signIn: (mail: string, password: string) => {
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  },

  signOut: () => {
    signOut(auth);
  },

  checkAdminRigths: async (userId: string) => {
    const docRef = doc(db, 'admins', 'admins-robomanuals');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().adminId === userId ? true : false;
    } else {
      console.log('No such document!');
    }
  },
};

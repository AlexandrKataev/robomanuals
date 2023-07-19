import { useEffect, useState } from 'react';

import './App.scss';
import { Header } from '@layouts';
import { Routing } from './routing/Routing';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'src/shared/api/config/firebase';
import { userService } from '@services';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      userService
        .checkAdminRigths(auth.currentUser.uid)
        .then((value) => setIsAdmin(value || false));
    }
  }, [isAuth]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setIsAuth(true);
      setUserName(user.displayName || '');

      // ...
    } else {
      setIsAuth(false);
      // User is signed out
      // ...
    }
  });

  return (
    <div className="bg-light">
      <Header userName={userName} isAuth={isAuth} isAdmin={isAdmin} />
      <Routing isAdmin={isAdmin} />
    </div>
  );
};

export default App;

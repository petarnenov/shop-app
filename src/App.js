import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/userAction';
import { setCategoriesArray } from './store/categories/categoriesActioin';

import './styles.scss';
import {
  createUserAuthDoc,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from './utils/firebase/firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsibscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserAuthDoc(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsibscribe;
  }, [dispatch]);

  // TODO: move to [Shop] component
  useEffect(() => {
    const getGategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategoriesArray(categoriesArray));
    };
    getGategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

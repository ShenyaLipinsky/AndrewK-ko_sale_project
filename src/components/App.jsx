import { isEqual } from 'lodash';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import getStoredState from 'redux-persist/es/getStoredState';
import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSlice';
import {
  addItem,
  loadCart,
  saveCart,
  updateQuantity,
} from 'redux/cart/cartSlice';
import LogIn from './LogIn/LogIn';
import Instruction from './Pages/ProductDetails/Instruction';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import TableOfSize from './Pages/ProductDetails/TableOfSize';
import Registration from './Registration/Registration';

const Layout = lazy(() => import('./Layout/Layout'));
const Footer = lazy(() => import('./Footer/Footer'));
const Products = lazy(() => import('./Pages/Products/Products'));

export const App = () => {
  const [cartItems, setCartItems] = useState();
  const [cartCounter, setCartCounter] = useState(0);

  const dispatch = useDispatch();
  const location = useLocation();
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);

  function handleUpdateCartQuantity() {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    if (localCartData && !isEqual(localCartData, cartItems)) {
      setCartCounter(localCartData.length);
    }
  }

  function handleUpdateCartItems() {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    if (localCartData && !isEqual(localCartData, cartItems)) {
      setCartItems(localCartData);
    }
  }

  function handleUpdateQuantity(id, quantity) {
    dispatch(updateQuantity({ id, quantity }));
    dispatch(saveCart(getStoredState().cart));
  }

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента

    if (localStorage.getItem('cart') === undefined || null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    let localCardData = JSON.parse(localStorage.getItem('cart'));

    if (localCardData) {
      localStorage.setItem('cart', JSON.stringify(localCardData));
      setCartItems(localCardData);
      setCartCounter(localCardData.length);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
      setCartItems([]);
    }
    console.log(localCardData);
  }, []);
  useEffect(() => {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    if (localCartData && !isEqual(localCartData, cartItems)) {
      setCartCounter(localCartData.length);
    }
  }, [cartItems]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Suspense fallback="...Loading">
              <Layout
                cartCounter={cartCounter}
                cartItems={cartItems}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleUpdateCartItems={handleUpdateCartItems}
              />
              <Footer />
            </Suspense>
          </>
        }
      >
        <Route path="/" element={<Navigate to="all" replace={true} />} />
        <Route
          path="/all"
          element={
            <Products
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleUpdateCartItems={handleUpdateCartItems}
            />
          }
        />
        <Route path=":id" element={<ProductDetails />}>
          <Route path="instruction" element={<Instruction />} />
          <Route path="sizing" element={<TableOfSize />} />
        </Route>
        <Route
          path="login"
          element={loggedIn ? <Navigate to="/all" replace={true} /> : <LogIn />}
        />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
};

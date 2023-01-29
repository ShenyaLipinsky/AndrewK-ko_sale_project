import { Suspense } from 'react';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSlice';
import { AppBox } from '../App.styled';
import LogIn from './LogIn/LogIn';
import Instruction from './Pages/ProductDetails/Instruction';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Registration from './Registration/Registration';

const Layout = lazy(() => import('./Layout/Layout'));
const Footer = lazy(() => import('./Footer/Footer'));
const Products = lazy(() => import('./Pages/Products/Products'));

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Suspense fallback="...Loading">
              <Layout />
              <Footer />
            </Suspense>
          </>
        }
      >
        <Route path="/" element={<Navigate to="all" replace={true} />} />
        <Route path="/all" element={<Products />} />
        <Route path=":id" element={<ProductDetails />}>
          <Route path="instruction" element={<Instruction />} />
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

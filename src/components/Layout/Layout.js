import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = ({ cartCounter, cartItems }) => {
  return (
    <>
      <AppBar cartCounter={cartCounter} cartItems={cartItems} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

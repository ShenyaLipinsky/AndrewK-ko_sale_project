import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = ({
  cartCounter,
  cartItems,
  handleUpdateCartItems,
  handleUpdateCartQuantity,
}) => {
  return (
    <>
      <AppBar
        cartCounter={cartCounter}
        cartItems={cartItems}
        handleUpdateCartQuantity={handleUpdateCartQuantity}
        handleUpdateCartItems={handleUpdateCartItems}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

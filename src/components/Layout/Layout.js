import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = ({ cartCounter }) => {
  return (
    <>
      <AppBar cartCounter={cartCounter} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

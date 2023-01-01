import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
// import HeroSlider from './Hero/HeroSlider';
// import Layout from './Layout/Layout';
import Cast from './Pages/ProductDetails/Cast';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Reviews from './Pages/ProductDetails/Reviews';
// import Home from './Pages/Home/Home';
// import Movies from './Pages/Movies/Movies';

const Layout = lazy(() => import('./Layout/Layout'));
const Hero = lazy(() => import('./Hero/Hero'));

const Home = lazy(() => import('./Home/Home'));
const Products = lazy(() => import('./Pages/Products/Products'));

export const App = () => {
  const location = useLocation();

  return (
    <Routes>
      {/* {location.pathname === '/' ? ( */}
      <Route
        path="/"
        element={
          <>
            <Layout />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      {/* ) : ( */}
      {/* <Route path="/" element={<Layout />}>
         <Route path="movies" element={<Movies />} />
         <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
           </Route>
         </Route> */}
      {/* )} */}
    </Routes>
  );
};

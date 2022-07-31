import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import HeroSlider from './Hero/HeroSlider';
// import Layout from './Layout/Layout';
import Cast from './Pages/FilmDetails/Cast';
import FilmDetails from './Pages/FilmDetails/FilmDetails';
import Reviews from './Pages/FilmDetails/Reviews';
// import Home from './Pages/Home/Home';
// import Movies from './Pages/Movies/Movies';

const Layout = lazy(() => import('./Layout/Layout'));
const HeroSlider = lazy(() => import('./Hero/HeroSlider'));

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));

export const App = () => {
  const location = useLocation();

  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route
          path="/"
          element={
            <>
              <Layout />
              <HeroSlider />
              <Home />
            </>
          }
        ></Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
};

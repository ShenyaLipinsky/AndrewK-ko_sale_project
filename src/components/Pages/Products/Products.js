import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import { fetchMovieById, searchMovies } from 'components/services/API-MovieDB';
import MainPage from 'components/MainPage/MainPage';
import { fetchProductById } from 'components/services/API-Products_DB';
const Hero = lazy(() => import('../../Hero/Hero'));

const Home = lazy(() => import('../../Home/Home'));

const Products = () => {
  const location = useLocation();
  const [foundedFilms, setFoundedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queueParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queueParam === '') {
      return;
    }
    searchMovies(queueParam).then(setFoundedFilms);
  }, [queueParam]);
  const changeSearchValue = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBox value={queueParam} onSubmit={changeSearchValue} />
      {/* {foundedFilms.length > 0 && ( */}
      <>
        {/* <MainPage
            data={foundedFilms}
            moreDetails={fetchMovieById}
            location={location}
            state={{ from: location }}
          /> */}
        <Hero />
        <Home
          moreDetails={fetchProductById}
          location={location}
          state={{ from: location }}
        />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
      {/* )} */}
    </main>
  );
};
export default Products;

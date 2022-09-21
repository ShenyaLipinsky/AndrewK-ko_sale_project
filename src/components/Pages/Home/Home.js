// import MainPage from 'components/MainPage/MainPage';
import ProductCard from 'components/ProductCard/ProductCard';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '../../Box';
import { fetchMovieById, fetchMovies } from '../../services/API-MovieDB';
import SliderHomePage from './SliderHomePage';
import { ProductBox } from './SliderHomePage.styled';

const Home = () => {
  const [hits, setHits] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movies = await fetchMovies();
        setHits(movies.results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieData();
    return;
  }, []);
  return (
    <Box as="main" gridTemplateRows="auto 2fr" p={2}>
      <Box as="h2" p={3}>
        Trending today
      </Box>
      {/* <MainPage data={hits} moreDetails={fetchMovieById} location={location} /> */}
      {hits.length > 0 ? (
        <SliderHomePage
          data={hits}
          moreDetails={fetchMovieById}
          location={location}
        />
      ) : (
        <h4>No images</h4>
      )}
      <ProductBox>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;

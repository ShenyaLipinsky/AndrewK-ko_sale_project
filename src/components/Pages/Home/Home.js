// import MainPage from 'components/MainPage/MainPage';
import ProductCard from 'components/ProductCard/ProductCard';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '../../Box';
import { fetchMovieById, fetchMovies } from '../../services/API-MovieDB';
import SliderHomePage from './SliderHomePage';
import { ProductBox } from './SliderHomePage.styled';
import { fetchProducts } from 'components/services/API-Products_DB';

const Home = () => {
  const [hits, setHits] = useState([]);
  const [products, setProducts] = useState([]);

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

    async function fetchProductsData() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchProductsData();
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
        {products.map(({ _id, image, title, short_description, price }) => {
          if (image === 'No Image') {
            return (
              <ProductCard
                key={_id}
                image="No Image"
                title={title}
                cardDescription={short_description}
                price={price}
              />
            );
          }
          return (
            <ProductCard
              key={_id}
              image={image}
              title={title}
              cardDescription={short_description}
              price={price}
            />
          );
        })}
      </ProductBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;

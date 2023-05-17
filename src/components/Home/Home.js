// import MainPage from 'components/MainPage/MainPage';
import ProductCard from 'components/ProductCard/ProductCard';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '../Box';
import { fetchMovieById, fetchMovies } from '../services/API-MovieDB';
import SliderHomePage from './SliderHomePage';
import {
  fetchProductById,
  fetchProducts,
} from 'components/services/API-Products_DB';
import Pagination from 'components/Pagination/Pagination';
import { ProductBox } from './Home.styled';
import WrappedLoader from 'components/ProductCardLoader/ProductCardLoader';

const Home = ({
  moreDetails,
  location,
  handleUpdateCartQuantity,
  handleUpdateCartItems,
}) => {
  const preloadLimit = 10;
  const preloadPage = 1;
  const [hits, setHits] = useState([]);
  const [totalHist, setTotalHits] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(preloadLimit.toString());
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(preloadPage.toString());
  const [disabledFwd, setDisabledFwd] = useState(false);
  const [disabledBwd, setDisabledBwd] = useState(true);

  // const location = useLocation();
  console.log(location);

  async function fetchMovieData() {
    try {
      const movies = await fetchMovies();
      setHits(movies.results);
    } catch (error) {
      console.log('error', error);
    }
  }
  async function fetchProductsData(getPage, getLimit) {
    let { pathname } = location;
    try {
      if (pathname === '/all') {
        pathname = '';
      }
      const products = await fetchProducts(pathname, getPage, getLimit);
      setProducts(products.result);
      setTotalHits(products.total_items);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    fetchMovieData();
    return;
  }, []);
  useEffect(() => {
    fetchProductsData(page, limit);
  }, [limit, page]);

  useEffect(() => {
    setTotalPages(parseInt(totalHist) / parseInt(limit));

    if (totalPages === 1 && parseInt(page) === 1) {
      setDisabledFwd(true);
      setDisabledBwd(true);
    } else if (totalPages > 1) {
      setDisabledFwd(false);
      setDisabledBwd(false);
    }
    if (parseInt(page) === 1) {
      setDisabledBwd(true);
    }
    if (totalPages <= 1) {
      setDisabledFwd(true);
    }
    return;
  }, [limit, page, totalHist, totalPages]);
  return (
    <Box as="main" gridTemplateRows="auto 2fr" p={3}>
      <Box as="h2" mb={3}>
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
        {products?.length !== 0 ? (
          products?.map(({ _id, image, title, short_description, price }) => {
            if (image === 'No Image') {
              return (
                <ProductCard
                  key={_id}
                  id={_id}
                  image="No Image"
                  title={title}
                  cardDescription={short_description}
                  price={price}
                  moreDetails={fetchProductById}
                  location={location}
                  handleUpdateCartQuantity={handleUpdateCartQuantity}
                  handleUpdateCartItems={handleUpdateCartItems}
                />
              );
            }
            return (
              <ProductCard
                key={_id}
                id={_id}
                image={image}
                title={title}
                cardDescription={short_description}
                price={price}
                moreDetails={fetchProductById}
                location={location}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleUpdateCartItems={handleUpdateCartItems}
              />
            );
          })
        ) : (
          <>
            {Array(10)
              .fill(true)
              .map((_, i) => (
                <WrappedLoader key={i} />
              ))}
          </>
        )}
      </ProductBox>
      <Pagination
        disB={disabledBwd}
        disF={disabledFwd}
        setPage={setPage}
        setLimit={setLimit}
        totalHist={totalHist}
        page={page}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;

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
  const [totalHist, setTotalHits] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState('9');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState('1');
  const [disabledFwd, setDisabledFwd] = useState(false);
  const [disabledBwd, setDisabledBwd] = useState(true);

  const location = useLocation();

  async function fetchMovieData() {
    try {
      const movies = await fetchMovies();
      setHits(movies.results);
    } catch (error) {
      console.log('error', error);
    }
  }
  async function fetchProductsData(getPage, getLimit) {
    try {
      const products = await fetchProducts(getPage, getLimit);
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
    setTotalPages(parseInt(totalHist) / parseInt(limit));

    if (totalPages === 1 && parseInt(page) === 1) {
      setDisabledFwd(true);
      setDisabledBwd(true);
    } else if (totalPages > 1) {
      setDisabledFwd(false);
      setDisabledBwd(false);
    }
    if (page === '1') {
      setDisabledBwd(true);
    }
    if (totalPages <= 1) {
      setDisabledFwd(true);
    }
    return;
  }, [limit, page, totalHist, totalPages]);

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
        {products.length !== 0 ? (
          products.map(({ _id, image, title, short_description, price }) => {
            if (image === 'No Image') {
              return (
                <ProductCard
                  key={_id}
                  id={_id}
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
          })
        ) : (
          <div>Loader...</div>
        )}
        <div>
          <button
            disabled={disabledBwd}
            onClick={() => {
              let prevPage = parseInt(page) - 1;
              setPage(prevPage.toString());
            }}
          >
            {'<-'}
          </button>
          <select
            className="qtyOnPage"
            defaultValue="9"
            onChange={e => {
              setLimit(e.target.value);
            }}
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
          <button
            disabled={disabledFwd}
            onClick={() => {
              let nextPage = parseInt(page) + 1;
              setPage(nextPage.toString());
            }}
          >
            {'->'}
          </button>
        </div>
      </ProductBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;

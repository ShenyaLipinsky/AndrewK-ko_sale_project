import propTypes from 'prop-types';

import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import {
  AdditionalInfoBtn,
  AdditionalInfoTitle,
  BackLinkBtn,
  FilmImage,
  InfoBox,
  InfoBtn,
  InfoBtnBox,
  InfoDescription,
  InfoItem,
  InfoPrice,
  InfoText,
  InfoTitle,
  InfoTradeMark,
  MainContentBox,
  SliderBox,
} from './ProductDetails.styled';
import { fetchProductById } from 'components/services/API-Products_DB';
import { ProductCardNoImage } from 'components/ProductCard/ProductCard.styled';
import { IoIosImage } from 'react-icons/io';
import { Container } from 'App.styled';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();
  const [remakedArray, setRemakedArray] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchProductData() {
      try {
        await fetchProductById(id).then(setProductDetails);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchProductData();
  }, [id]);

  // useEffect(() => {
  //   const { full_images } = productDetails;
  //    full_images.map(el => {
  //     setRemakedArray({
  //       original: el,
  //       thumbnail: el,
  //     });
  //     return remakedArray;
  //   });
  // }, [productDetails, remakedArray]);

  if (productDetails === undefined) {
    return;
  }

  const backLinkHref = location.state?.from ?? '/';
  if (productDetails === null) {
    return (
      <>
        <h2>Oops something going wrong, try later...</h2>
        <Link to={backLinkHref}>Back</Link>
      </>
    );
  }
  const {
    instruction_description,
    TM,
    title,
    description,
    full_images,
    image_of_size,
    price,
    recommended_products,
    product_about,
  } = productDetails;
  console.log(productDetails);
  // const { full_images } = productDetails;
  const newArrayImages = full_images.map(el => {
    const newObj = {
      original: el,
      thumbnail: el,
    };
    return newObj;
  });
  console.log(newArrayImages);
  return (
    <>
      <Box as="main" boxShadow="1px 1px 4px #000000">
        <Container>
          <BackLinkBtn to={backLinkHref}>Back</BackLinkBtn>
        </Container>
        <MainContentBox>
          <SliderBox>
            {full_images.length === 0 ? (
              <ProductCardNoImage>
                <IoIosImage />
              </ProductCardNoImage>
            ) : full_images[0] === 'No Image' ? (
              <ProductCardNoImage>
                <IoIosImage />
              </ProductCardNoImage>
            ) : (
              <ImageGallery
                items={newArrayImages}
                autoPlay={true}
                slideInterval={5000}
              />
            )}
          </SliderBox>
          <InfoBox>
            <InfoItem>
              <InfoTitle>{title}</InfoTitle>
            </InfoItem>

            <InfoItem>
              <InfoTradeMark>{TM}</InfoTradeMark>
            </InfoItem>
            <InfoItem>
              <InfoDescription>{description}</InfoDescription>
            </InfoItem>
            <InfoItem>
              <InfoText>{product_about}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoPrice>Price: {price}</InfoPrice>
            </InfoItem>
            <InfoBtnBox>
              <InfoBtn>Buy</InfoBtn>
              <InfoBtn>Buy</InfoBtn>
            </InfoBtnBox>
          </InfoBox>
        </MainContentBox>
      </Box>
      <Box
        as="div"
        // display="flex"
        // flexDirection="column"
        // p={3}
        boxShadow="1px 1px 4px #000000"
        width="100vw"
      >
        <Container>
          <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
          <Box as="div" display="flex" justifyContent="space-between">
            <AdditionalInfoBtn to="instruction" state={{ from: backLinkHref }}>
              Instruction
            </AdditionalInfoBtn>
            <AdditionalInfoBtn to="sizing" state={{ from: backLinkHref }}>
              Sizing
            </AdditionalInfoBtn>
          </Box>
        </Container>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
ProductDetails.propTypes = {
  id: propTypes.number,
  productDetails: propTypes.array,
};

export default ProductDetails;

import { Box } from 'theme-ui';
import {
  ProductCardBox,
  ProductCardBtns,
  ProductCardBtnsBox,
  ProductCardDescr,
  ProductCardImage,
  ProductCardImageLink,
} from './ProductCard.styled';

const ProductCard = ({ price, cardDescription, image, title }) => {
  console.log(price);
  return (
    <ProductCardBox>
      <ProductCardImageLink href="/">
        <ProductCardImage src={image} alt="product-title" />
      </ProductCardImageLink>
      <ProductCardDescr>
        <a href="/">{title}</a>
        <p>{cardDescription}</p>
        <h3>Price: {price}</h3>
      </ProductCardDescr>
      <ProductCardBtnsBox>
        <ProductCardBtns>Favorite</ProductCardBtns>
        <ProductCardBtns>Add</ProductCardBtns>
      </ProductCardBtnsBox>
    </ProductCardBox>
  );
};

export default ProductCard;

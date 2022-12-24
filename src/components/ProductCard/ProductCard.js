import {
  ProductCardBox,
  ProductCardBtns,
  ProductCardBtnsBox,
  ProductCardDescr,
  ProductCardImage,
  ProductCardNoImage,
  ProductCardImageLink,
} from './ProductCard.styled';
import { IoIosImage } from 'react-icons/io';
import { IconContext } from 'react-icons';

const ProductCard = ({ price, cardDescription, image, title }) => {
  console.log(image);
  if (image === 'No Image') {
    return (
      <ProductCardBox>
        <ProductCardImageLink href="/">
          <ProductCardNoImage>
            <IoIosImage />
          </ProductCardNoImage>
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
  }
  return (
    <ProductCardBox>
      <ProductCardImageLink href="/">
        <ProductCardImage src={image} alt={title} />
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

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
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSlice';
import { authOperations } from 'redux/auth/authOperations';

const ProductCard = ({ id, price, cardDescription, image, title }) => {
  const dispatch = useDispatch();

  let isAdmin = useSelector(authSelectors.getIsAdmin);
  let userId = useSelector(authSelectors.getUserId);
  let userEmail = useSelector(authSelectors.getUserEmail);

  //   const handleClickLogOut = () => {
  //     dispatch(authOperations.logOut(userId));
  // };

  if (image === 'No Image') {
    return (
      <ProductCardBox>
        {isAdmin && <ProductCardBtns>Edit</ProductCardBtns>}
        <ProductCardImageLink href={`/${id}`}>
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
      {isAdmin && <ProductCardBtns>Edit</ProductCardBtns>}

      <ProductCardImageLink href={`/${id}`}>
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

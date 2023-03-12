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
import { useState } from 'react';
import { useEffect } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { addItem, removeItem } from 'redux/cart/cartSlice';

const ProductCard = ({
  id,
  price,
  cardDescription,
  image,
  title,
  moreDetails,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  let isAdmin = useSelector(authSelectors.getIsAdmin);

  const handleEditClick = async id => {
    setModalInfo(await moreDetails(id));
    setIsModalOpen(true);
  };

  // const handleAddToCart = () => {
  //   dispatch(addItem({ id, title, price, quantity: 1 }));
  //   let cartData = JSON.parse(localStorage.getItem('persist:cart')) || '{}';
  //   if (cartData) {
  //     let newData = Object.keys(cartData)
  //       .map(key => {
  //         if (key === '_persist') {
  //           return null;
  //         }
  //         return { [key]: cartData[key] };
  //       })
  //       .filter(el => el !== null);
  //     console.log(newData);
  //     localStorage.setItem('cart', JSON.stringify(newData));
  //   } else {
  //     localStorage.setItem('cart', JSON.stringify([]));
  //   }
  // };

  const handleAddToCart = () => {
    dispatch(addItem({ id, title, price, quantity: 1 }));
    dispatch((dispatch, getState) => {
      const cartData = getState().cart;
      const newData = Object.keys(cartData)
        .filter(key => key !== '_persist')
        .map(key => {
          return { ...cartData[key], id: key };
        })
        .filter(item => item !== null);

      localStorage.setItem('cart', JSON.stringify(newData));
    });
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  if (image === 'No Image') {
    return (
      <ProductCardBox>
        {isAdmin && (
          <ProductCardBtns
            onClick={() => {
              handleEditClick(id);
            }}
          >
            Edit
          </ProductCardBtns>
        )}
        {isModalOpen && (
          <ModalAddTransaction
            data={modalInfo}
            onClose={() => setIsModalOpen(false)}
          />
        )}
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
          <ProductCardBtns
            // onClick={
            //   () => {
            //   const cartData = JSON.parse(localStorage.getItem('cart'));
            //   if (cartData) {
            //     let newData = [...cartData, { quantity: 1, id }];
            //     localStorage.setItem('cart', JSON.stringify(newData));
            //   }
            // }
            // }
            onClick={handleAddToCart}
          >
            Favorite
          </ProductCardBtns>
          <ProductCardBtns>Add</ProductCardBtns>
        </ProductCardBtnsBox>
      </ProductCardBox>
    );
  }
  return (
    <ProductCardBox>
      {isAdmin && (
        <ProductCardBtns
          onClick={() => {
            handleEditClick(id);
          }}
        >
          Edit
        </ProductCardBtns>
      )}
      {isModalOpen && (
        <ModalAddTransaction
          data={modalInfo}
          onClose={() => setIsModalOpen(false)}
        />
      )}

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

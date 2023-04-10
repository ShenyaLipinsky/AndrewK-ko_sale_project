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
import { addItem, removeItem, updateQuantity } from 'redux/cart/cartSlice';

const ProductCard = ({
  id,
  price,
  cardDescription,
  image,
  title,
  moreDetails,
  handleUpdateCartQuantity,
  handleUpdateCartItems,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  let isAdmin = useSelector(authSelectors.getIsAdmin);

  const handleEditClick = async id => {
    setModalInfo(await moreDetails(id));
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    dispatch((dispatch, getState) => {
      const cartData = getState().cart;
      const itemIndex = Object.keys(cartData)
        .filter(key => key !== '_persist')
        .findIndex(key => cartData[key].id === id);
      dispatch(addItem({ id, title, price, quantity: 1 }));
      console.log(itemIndex);
      if (itemIndex >= 0) {
        // Элемент уже есть в корзине
        const newData = Object.keys(cartData)
          .filter(key => key !== '_persist')
          .map(key => {
            if (key === cartData[key].id) {
              return { ...cartData[key], quantity: cartData[key].quantity + 1 };
            }
            return { ...cartData[key] };
          });
        localStorage.setItem('cart', JSON.stringify(newData));
      } else {
        // Элемента еще нет в корзине
        const existingItem = Object.keys(cartData)
          .filter(key => key !== '_persist')
          .find(key => cartData[key].id === id);
        if (existingItem) {
          // Товар уже есть в корзине, нужно увеличить количество
          const newData = Object.keys(cartData)
            .filter(key => key !== '_persist')
            .map(key => {
              if (key === existingItem) {
                return {
                  ...cartData[key],
                  quantity: cartData[key].quantity + 1,
                };
              }
              return { ...cartData[key] };
            });
          localStorage.setItem('cart', JSON.stringify(newData));
        } else {
          // Элемента еще нет в корзине
          const newData = Object.keys(cartData)
            .filter(key => key !== '_persist')
            .map(key => ({ ...cartData[key] }))
            .concat([{ id, title, price, quantity: 1 }]);
          localStorage.setItem('cart', JSON.stringify(newData));
        }
      }
    });
    handleUpdateCartQuantity();
    handleUpdateCartItems();
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

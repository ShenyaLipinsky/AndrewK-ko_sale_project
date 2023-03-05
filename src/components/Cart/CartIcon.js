import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({
  cartItems,
  cartItemsCount,
  setCartItems,
  setCartItemsCount,
  cartCounter,
}) => {
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem('cart'))
  // );
  // const [cartCounter, setCartCounter] = useState(0);
  // useEffect(() => {
  //   // Получаем данные из локального хранилища при монтировании компонента
  //   // const cartData = JSON.parse(localStorage.getItem('cart'));
  //   // console.log('cartData :>> ', cartData);
  //   if (cartItems) {
  //     const itemCount = cartItems.length;
  //     setCartItemsCount(itemCount);
  //   } else {
  //     localStorage.setItem('cart', JSON.stringify([]));
  //     setCartItems([]);
  //   }
  //   // Считаем количество товаров в корзине
  // }, [cartItems, setCartItems, setCartItemsCount]);

  // useEffect(() => {
  //   // Сохраняем данные в локальное хранилище при обновлении количества товаров в корзине
  //   // console.log(cartItems);
  //   // localStorage.setItem('cart', JSON.stringify(cartItems));
  //   // Считаем количество товаров в корзине

  //   // const cartData = JSON.parse(localStorage.getItem('cart'));
  //   const itemCount = cartItems.length;
  //   //   .reduce(
  //   //   (total, cartItem) => total + cartItem.quantity,
  //   //   0
  //   // );
  //   setCartItemsCount(itemCount);
  //   setCartCounter(itemCount);
  // }, [cartItems, setCartItemsCount]);

  return (
    <div>
      <FaShoppingCart />
      {cartCounter > 0 && <span>{cartCounter}</span>}
    </div>
  );
};

export default CartIcon;

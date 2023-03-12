import { isEqual } from 'lodash';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () =>
  // {
  // cartItems,
  // cartItemsCount,
  // setCartItems,
  // setCartItemsCount,
  // cartCounter,
  // }
  {
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItems, setCartItems] = useState();
    const [cartCounter, setCartCounter] = useState(0);

    // const useCartState = () => {
    //   return [useStore().getState().cart][0];
    // };
    // const cartState = useCartState();
    // console.log(
    //   Object.keys(cartState)
    //     .filter(key => key !== '_persist')
    //     .map(key => {
    //       return { ...cartState[key], id: key };
    //     }),
    //   cartCounter
    // );
    useEffect(() => {
      // Получаем данные из локального хранилища при монтировании компонента

      if (localStorage.getItem('cart') === undefined || null) {
        localStorage.setItem('cart', JSON.stringify([]));
      }

      let localCardData = JSON.parse(localStorage.getItem('cart'));

      if (localCardData) {
        localStorage.setItem('cart', JSON.stringify(localCardData));
        setCartItems(localCardData);
        setCartCounter(localCardData.length);
      } else {
        localStorage.setItem('cart', JSON.stringify([]));
        setCartItems([]);
      }
    }, []);
    useEffect(() => {
      const localCartData = JSON.parse(localStorage.getItem('cart'));
      if (localCartData && !isEqual(localCartData, cartItems)) {
        setCartCounter(localCartData.length);
      }
    }, [cartItems]);

    return (
      <div>
        <FaShoppingCart />
        {cartCounter > 0 && <span>{cartCounter}</span>}
      </div>
    );
  };

export default CartIcon;

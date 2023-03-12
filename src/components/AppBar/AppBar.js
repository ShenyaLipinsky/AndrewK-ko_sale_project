import propTypes from 'prop-types';
import {
  LogoutBtn,
  NavBox,
  NavDropBox,
  NavDropBoxList,
  NavItem,
  NavItemList,
  NavItemMore,
  NavLoginBox,
  NavLogo,
} from './AppBar.styled';
import { Box } from '../Box';
import { navItems } from './NavItems';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { authSelectors } from 'redux/auth/authSlice';
import { authOperations } from 'redux/auth/authOperations';
import CartIcon from 'components/Cart/CartIcon';
import { useState, useEffect } from 'react';
import { isEqual } from 'lodash';

const AppBar = () => {
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // const [cartItems, setCartItems] = useState();
  // const [cartCounter, setCartCounter] = useState();

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
  // useEffect(() => {
  //   // Получаем данные из локального хранилища при монтировании компонента

  //   if (localStorage.getItem('cart') === undefined || null) {
  //     localStorage.setItem('cart', JSON.stringify([]));
  //   }

  //   let localCardData = JSON.parse(localStorage.getItem('cart'));

  //   if (localCardData) {
  //     localStorage.setItem('cart', JSON.stringify(localCardData));
  //     setCartItems(localCardData);
  //     let objectSize = localCardData.length;
  //     setCartItemsCount(objectSize);
  //   } else {
  //     localStorage.setItem('cart', JSON.stringify([]));
  //     setCartItems([]);
  //   }
  // }, []);

  // useEffect(() => {
  //   const localCartData = JSON.parse(localStorage.getItem('cart'));
  //   if (localCartData && !isEqual(localCartData, cartItems)) {
  //     setCartCounter(localCartData.length);
  //   }
  // }, [cartItems]);

  const dispatch = useDispatch();

  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userId = useSelector(authSelectors.getUserId);
  let userEmail = useSelector(authSelectors.getUserEmail);

  const handleClickLogOut = () => {
    dispatch(authOperations.logOut(userId));
  };

  return (
    <Box
      as="header"
      width="100vw"
      boxShadow="1px 1px 4px #000000"
      mb={3}
      bg="primary_2"
    >
      <NavBox>
        <NavLogo to="/">
          <img src="../Images/NoPhoto.jpg" alt="" width={3} />
        </NavLogo>
        {navItems.map(({ href, text, buttons }) => {
          if (!buttons) {
            return (
              <NavItem to={href} key={href}>
                {text}
              </NavItem>
            );
          }
          return (
            <NavDropBox key={href}>
              <NavItem to={href}>{text}</NavItem>
              <NavDropBoxList as="ul" display="flex" flexDirection="column">
                {buttons.map(({ href, text }) => {
                  return (
                    <NavItemList key={href}>
                      <NavItemMore to={href}>{text}</NavItemMore>
                    </NavItemList>
                  );
                })}
              </NavDropBoxList>
            </NavDropBox>
          );
        })}
        <NavLoginBox>
          <CartIcon
          // setCartItems={setCartItems}
          // setCartItemsCount={setCartItemsCount}
          // cartItems={cartItems}
          // cartItemsCount={cartItemsCount}
          // cartCounter={cartCounter}
          />
          {loggedIn ? (
            <>
              <span>{userEmail}</span>
              <LogoutBtn onClick={() => handleClickLogOut()}>Вийти</LogoutBtn>
            </>
          ) : (
            <>
              <NavItem to="login">Логін</NavItem>
              <NavItem to="register">Реєстрація</NavItem>
            </>
          )}
        </NavLoginBox>
      </NavBox>
    </Box>
  );
};
AppBar.propTypes = {
  to: propTypes.string,
};

export default AppBar;

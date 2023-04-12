import propTypes from 'prop-types';
import {
  CartBox,
  CartDetailsBox,
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

const AppBar = ({ cartCounter, cartItems }) => {
  const [cartLoadedItems, setCartLoadedItems] = useState([]);
  const dispatch = useDispatch();

  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userId = useSelector(authSelectors.getUserId);
  let userEmail = useSelector(authSelectors.getUserEmail);

  const handleClickLogOut = () => {
    dispatch(authOperations.logOut(userId));
  };

  useEffect(() => {
    setCartLoadedItems(cartItems);
  }, [cartItems]);

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
          <CartBox>
            <CartIcon
              // setCartItems={setCartItems}
              // setCartItemsCount={setCartItemsCount}
              // cartItems={cartItems}
              // cartItemsCount={cartItemsCount}
              cartCounter={cartCounter}
            />
            <CartDetailsBox>
              <h2>Ваша корзина</h2>
              <div>
                <ul>
                  {cartLoadedItems.map(({ title, price, quantity }) => {
                    return (
                      <li>
                        <h3>{title}</h3>
                        <p>{price}</p>
                        <p>{quantity}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CartDetailsBox>
          </CartBox>
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

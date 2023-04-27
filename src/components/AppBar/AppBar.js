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
import { isEqual, toInteger } from 'lodash';
import ModalCartCheckout from 'components/ModalCartCheckout/ModalCartCheckout';

const AppBar = ({
  cartCounter,
  cartItems,
  handleUpdateCartItems,
  handleUpdateCartQuantity,
}) => {
  const [cartLoadedItems, setCartLoadedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const dispatch = useDispatch();

  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userId = useSelector(authSelectors.getUserId);
  let userEmail = useSelector(authSelectors.getUserEmail);

  const initValueReducer = 0;
  const totalPrice = cartLoadedItems?.reduce(
    (acc = 0, { price, quantity }) =>
      toInteger(acc) + toInteger(price) * toInteger(quantity),
    initValueReducer
  );
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  useEffect(() => {
    setCartLoadedItems(cartItems);
  }, [cartItems]);

  const handleClickLogOut = () => {
    dispatch(authOperations.logOut(userId));
  };

  const handleBuyClick = async data => {
    setModalInfo(data);
    setIsModalOpen(true);
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
                  {cartLoadedItems?.map(({ title, price, quantity }, i) => {
                    return (
                      <li key={i}>
                        <h3>{title}</h3>
                        <p>{price}</p>
                        <p>{quantity}</p>
                      </li>
                    );
                  })}
                </ul>
                <p>
                  Сумма замовлення: <span>{totalPrice}</span>
                </p>
                <button
                  onClick={() => {
                    handleBuyClick(cartLoadedItems, userEmail);
                  }}
                >
                  Замовити
                </button>
                {isModalOpen && (
                  <ModalCartCheckout
                    data={modalInfo}
                    email={userEmail}
                    totalPrice={totalPrice}
                    onClose={() => setIsModalOpen(false)}
                    handleUpdateCartQuantity={handleUpdateCartQuantity}
                    handleUpdateCartItems={handleUpdateCartItems}
                  />
                )}
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

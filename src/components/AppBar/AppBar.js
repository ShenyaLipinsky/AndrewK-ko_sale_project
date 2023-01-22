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
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSlice';

const AppBar = () => {
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userEmail = useSelector(authSelectors.getUserEmail);

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
          {loggedIn ? (
            <>
              <span>{userEmail}</span>
              <LogoutBtn>Вийти</LogoutBtn>
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

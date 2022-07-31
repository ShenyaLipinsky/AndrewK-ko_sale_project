import propTypes from 'prop-types';
import {
  NavBox,
  NavDropBox,
  NavDropBoxList,
  NavItem,
  NavItemList,
  NavItemMore,
  NavLogo,
} from './AppBar.styled';
import { Box } from '../Box';
import { navItems } from './NavItems';

const AppBar = () => {
  return (
    <Box as="header" width="100vw" boxShadow="1px 1px 4px #000000">
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
      </NavBox>
    </Box>
  );
};
AppBar.propTypes = {
  to: propTypes.string,
};

export default AppBar;

import propTypes from 'prop-types';
import {
  FooterStamp,
  NavBox,
  NavDropBox,
  NavDropBoxList,
  NavItem,
  NavItemList,
  // NavItemMore,
  NavLogo,
} from './Footer.styled';
import { Box } from '../Box';
import { navItems } from '../AppBar/NavItems';
import { Container } from 'App.styled';

const Footer = () => {
  return (
    <Box
      as="footer"
      display="flex"
      position="fixed"
      bottom={0}
      flexDirection="column"
      justify-content="space-between"
      alignItems="center"
      width="100vw"
      height={100}
      boxShadow="1px -1px 10px #000000"
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
                      {/* <NavItemMore to={href}>{text}</NavItemMore> */}
                    </NavItemList>
                  );
                })}
              </NavDropBoxList>
            </NavDropBox>
          );
        })}
      </NavBox>
      <Container>
        <FooterStamp>
          Copyright © 2022 ________ LLC. All the respective rights reserved.
        </FooterStamp>
      </Container>
    </Box>
  );
};
Footer.propTypes = {
  to: propTypes.string,
};

export default Footer;

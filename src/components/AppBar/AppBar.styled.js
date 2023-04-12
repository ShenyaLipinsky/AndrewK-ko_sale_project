import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { Container } from 'App.styled';

export const NavBox = styled(Container)`
  display: flex;
  position: relative;
  padding: ${p => p.theme.space[3]}px;
`;

export const NavLoginBox = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  span {
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.secondaryText};
  }
`;

export const NavDropBox = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: max-content;
  margin-left: ${p => p.theme.space[3]}px;

  :hover {
    overflow: visible;
  }
  :hover > ul {
    opacity: 1;
  }
`;

export const NavDropBoxList = styled(Box)`
  position: absolute;
  /* padding-top: ${p => p.theme.space[3]}px; */
  width: max-content;
  background-color: ${p => p.theme.colors.secondary};
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  transform: translate(0px, 35px);
  transition: ease-in-out 0.7s;
  opacity: 0;
  z-index: 2;
`;

const NavItemsBasicStyles = css`
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  text-align: center;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  min-width: 60px;
  margin-left: ${p => p.theme.space[3]}px;
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;

export const NavItem = styled(NavLink)`
  ${NavItemsBasicStyles}

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :first-child {
    margin-left: 0;
  }
`;

export const NavItemList = styled.li`
  /* padding: ${p => p.theme.space[3]}px; */
  display: flex;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;

export const NavItemMore = styled(NavLink)`
  text-decoration: none;
  padding: ${p => p.theme.space[3]}px;
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;
export const NavLogo = styled(NavLink)`
  /* position: absolute; */
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  min-width: 60px;

  /* &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  } */
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;

export const LogoutBtn = styled.button`
  ${NavItemsBasicStyles}
  border: none;
  cursor: pointer;
`;

export const CartDetailsBox = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: -450%;
  width: 250px;
  height: 290px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.whiteBlur};
  border-radius: ${p => p.theme.radii.large};
  overflow-y: scroll;
  transform: translate(0px, 35px);
  transition: ease-in-out 0.7s;
`;

export const CartBox = styled.div`
  position: relative;
  :hover ${CartDetailsBox} {
    opacity: 1;
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: ${p => p.theme.colors.text};
  text-decoration: underline;

  &.active {
    color: ${p => p.theme.colors.secondaryText};
  }
`;
export const NavItem = styled.li`
  width: 230px;

  :hover {
    zoom: 103%;
  }
`;

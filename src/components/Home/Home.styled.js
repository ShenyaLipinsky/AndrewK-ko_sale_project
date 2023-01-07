import { Container } from 'App.styled';
import styled from 'styled-components';

export const ProductBox = styled(Container)`
  display: grid;
  position: relative;
  max-width: ${p => `calc(100vw - ${p.theme.space[8]}px)`};
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => `${p.theme.space[5]}px`};
  justify-items: center;
  margin: auto;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; */
  /* margin: -15px; */
  /* padding: 20px; */
  /* justify-items: center; */
`;

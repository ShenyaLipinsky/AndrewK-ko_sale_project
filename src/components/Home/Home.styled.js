import { Container } from 'App.styled';
import { ProductCardBtns } from 'components/ProductCard/ProductCard.styled';
import styled from 'styled-components';

export const ProductBox = styled(Container)`
  display: grid;
  position: relative;
  width: ${p => `calc(100vw - ${p.theme.space[8]}px)`};
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

export const ProductsAddBtn = styled(ProductCardBtns)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.xxxl};
  position: fixed;
  border-radius: ${p => p.theme.borders.round};
  width: 60px;
  height: 60px;
  bottom: 204px;
  right: 0;
`;

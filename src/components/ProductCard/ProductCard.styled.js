import styled from 'styled-components';

export const ProductCardBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid red;
  &:hover {
    zoom: 105%;
  }
`;
export const ProductCardImageLink = styled.a`
  width: 100%;
  height: 90px;
`;
export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
`;

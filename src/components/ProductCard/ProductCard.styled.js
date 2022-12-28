import styled from 'styled-components';

export const ProductCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 290px;
  padding: 8px;
  border-radius: 5px;
  margin: 15px;
  border: 1px solid ${p => p.theme.colors.accent};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
    /* cursor: zoom-in; */
  }
`;
export const ProductCardImageLink = styled.a`
  width: 100%;
  height: 160px;
`;
export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const ProductCardNoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 50%;
    height: 50%;
    color: #00000075;
  }
`;
export const ProductCardDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductCardBtnsBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
`;

export const ProductCardBtns = styled.button`
  background-color: ${p => p.theme.colors.primary_2};
  border: none;
  border-radius: 4px;
  padding: 4px;
  min-width: 70px;
  &:hover {
    background-color: ${p => p.theme.colors.hovered};
    cursor: pointer;
  }
`;

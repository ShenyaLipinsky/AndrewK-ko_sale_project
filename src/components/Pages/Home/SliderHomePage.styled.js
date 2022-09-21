import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';

// export const SliderCarousel = styled(Carousel)`
//   display: flex;
//   justify-content: center;
//   background-color: ${p => p.theme.colors.secondary};
//   padding: ${p => p.theme.space[3]}px;
//   & li {
//     display: flex;
//     justify-content: center;
//   }
// `;
export const SliderContainer = styled.div`
  position: relative;
`;
export const SliderLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const CarouselStyled = styled(Carousel)`
  & ul {
    display: flex;
    align-items: center;
    max-height: 150px;
    & li {
      margin: 0 5px;
    }
  }
`;
export const ProductBox = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
  justify-items: center;
`;

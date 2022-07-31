import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const SliderCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[3]}px;
  & li {
    display: flex;
    justify-content: center;
  }
`;
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

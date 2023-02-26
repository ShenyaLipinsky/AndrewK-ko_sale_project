import { Container } from 'App.styled';
import { ProductCardBtns } from 'components/ProductCard/ProductCard.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  max-width: 60px;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
export const MainContentBox = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const SliderBox = styled.div`
  width: calc(50% - 30px);

  & .image-gallery {
    height: 100%;
    &-content {
      height: inherit;
    }
    &-slide-wrapper {
      height: 316px;
    }
    &-thumbnail {
      height: 80px;
    }
  }
  & .image-gallery-left-nav > svg,
  .image-gallery-right-nav > svg {
    display: block;
    height: 60px;
    width: 40px;
  }
`;
export const InfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  min-height: 45%;
`;

export const InfoItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const InfoTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const InfoTradeMark = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondaryText};
`;
export const InfoDescription = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const InfoText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  height: 300px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 8px 1px ${p => p.theme.colors.primary_2};
    :hover {
      box-shadow: inset 0 0 8px 20px ${p => p.theme.colors.primary_2};
    }
  }
`;

export const InfoPrice = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.black};
`;

export const InfoBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const InfoBtn = styled(ProductCardBtns)`
  width: calc(50% - 14px);
  height: 100%;
`;

export const FilmImage = styled.img`
  max-width: 230px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const FilmGenresList = styled.ul`
  display: flex;
`;
export const FilmGenresItem = styled.li`
  margin-left: ${p => p.theme.space[3]}px;
`;
export const AdditionalInfoTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const AdditionalInfoBtn = styled(BackLinkBtn)`
  max-width: none;
  width: calc(50% - 30px);
`;

export const ReviewItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid black;
  p {
    margin-bottom: ${p => p.theme.space[3]}px;
    font-size: 16px;
  }
  span {
    font-weight: 700;
  }
`;

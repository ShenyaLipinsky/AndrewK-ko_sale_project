import styled from 'styled-components';
import { Box } from 'theme-ui';

export const HeroImgBox = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: lightblue;
  padding: ${p => p.theme.space[3]}px;
`;

export const HeroImg = styled.img`
  width: auto;
  height: 250px;
`;

import { Container } from 'App.styled';
import styled from 'styled-components';

export const InstructionBox = styled(Container)`
  /* display: flex; */
  margin-bottom: 100px;
  :not(:has(img)) {
    display: flex;
    justify-content: center;
  }
`;

export const InstructionImg = styled.img`
  float: left;
  width: 30%;
  border-radius: ${p => p.theme.radii.large};
  margin: ${p => p.theme.space[3]}px;
  margin-left: 0;
`;
export const InstructionText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  /* text-align: center; */
`;

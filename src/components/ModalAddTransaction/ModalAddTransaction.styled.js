import styled from 'styled-components';
import { Form, Field } from 'formik';
import { breakpoints } from 'styleConfig/breakpoints';
import { CloseOutlined, CalendarOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${breakpoints.tablet}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  width: 100%;
  max-height: 100%;
  font-family: ${p => p.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  background-color: ${p => p.theme.colors.primary};
  position: relative;
  overflow-y: auto;
  /* top: 60px; */

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

  @media screen and (${breakpoints.tablet}) {
    width: 540px;
    max-height: 603px;
    border-radius: 20px;
  }
  @media screen and (${breakpoints.laptop}) {
    width: 80%;
    max-height: 80%;
  }
`;

export const CloseButton = styled(CloseOutlined)`
  font-size: 16px;

  position: absolute;
  top: 35px;
  right: 20px;

  &:hover {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-bottom: ${p => p.theme.space[8]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};

  @media (${breakpoints.tablet}) {
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 280px; */

  /* @media (${breakpoints.tablet}) { */
  /* flex-direction: row;
    flex-flow: wrap; */
  /* width: 394px; */
  /* } */
`;
export const InputGroupBox = styled.div`
  padding: 8px;
  /* & > div {
    :last-child {
      position: relative;
    }
  } */
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.space[3]}px;
  /* width: 50%; */
  display: flex;
  align-items: center;
`;
export const InputImageButtonAdd = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 23px;
`;

export const InputImageButtonRemove = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 2px;
`;
export const InputRecommendedBtnRemove = styled(InputImageButtonRemove)`
  position: relative;
  bottom: -3px;
  right: -12px;
`;

export const InputRecommendedBtnAdd = styled(InputImageButtonAdd)`
  position: relative;
  bottom: 18px;
`;

export const InputLabel = styled.label`
  width: 25%;
  font-size: ${p => p.theme.fontSizes.l};
  color: #000000;
`;
export const FullImagesInputBox = styled.div`
  width: 100%;
  & > div {
    display: flex;
  }
`;
export const SizeAndPriceBox = styled(FullImagesInputBox)`
  display: flex;
  flex-wrap: wrap;
  height: auto;
`;

export const InputCategory = styled.div`
  position: static;
  display: flex;
  margin-bottom: ${p => p.theme.space[2]}px;
  width: 100%;
  height: 36px;
  & > div {
    width: 85%;
  }
  align-items: center;

  /* @media (${breakpoints.tablet}) {
    width: 394px;
  } */
`;

export const InputAmount = styled(Field)`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 394px;
  height: 32px;

  &::placeholder {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.semibold};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.shadow};
  }
  /* 
  @media (${breakpoints.tablet}) {
    text-align: center;
    margin-bottom: 0;

    &::placeholder {
      text-align: center;
    }
  } */
`;

export const InputDate = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
  height: 32px;
  position: relative;

  @media (${breakpoints.tablet}) {
    width: 181px;
  }
`;

export const CalendarIcon = styled(CalendarOutlined)`
  font-size: 20px;
  color: ${p => p.theme.colors.secondary};

  position: absolute;
  bottom: ${p => p.theme.space[1]}px;
  right: ${p => p.theme.space[1]}px;
`;

export const InputComment = styled.textarea`
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
  height: 32px;
  resize: vertical;
  &::placeholder {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.shadow};
  }

  @media (${breakpoints.tablet}) {
    padding: 0 ${p => p.theme.space[1]}px;
    overflow-y: auto;
    width: 394px;
    /* height: 32px; */
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

export const SecondaryButton = styled.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

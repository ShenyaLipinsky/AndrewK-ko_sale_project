import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div:last-child {
    display: flex;
    justify-content: space-evenly;
    & > button {
      padding: ${p => p.theme.space[3]}px;
      border-radius: 5px;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const InputGroupBox = styled.div`
  padding: 8px;
  width: 100%;

  & > div {
    :last-child {
      position: relative;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.space[3]}px;
  /* width: 50%; */
  display: flex;
  align-items: center;
`;

export const ChartList = styled.ul`
  width: 100%;
`;
export const ChartListItem = styled.li`
  justify-content: space-between;
  display: flex;
  &:last-child {
    padding-top: ${p => p.theme.space[5]}px;
    justify-content: flex-end;
  }
  & > p {
    width: 25%;
    text-align: start;
  }
  & > div {
    width: 25%;
    text-align: start;
  }
`;

export const InputLabel = styled.label`
  width: 25%;
  font-size: ${p => p.theme.fontSizes.l};
  color: #000000;
  text-align: start;
`;

export const InputComment = styled.input`
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 55%;
  height: 36px;
  resize: none;
  overflow: auto;
  &::placeholder {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.shadow};
  }
`;

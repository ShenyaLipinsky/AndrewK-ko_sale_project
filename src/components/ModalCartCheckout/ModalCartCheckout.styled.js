import styled from 'styled-components';

export const StyledBox = styled.div`
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
  & > p {
    width: 25%;
    text-align: start;
  }
  & > div {
    width: 25%;
    text-align: start;
  }
`;

export const InputComment = styled.textarea`
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
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

import styled from 'styled-components';

export const PaginationBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;
export const PaginationBtn = styled.button`
  cursor: pointer;
  width: 15%;
  height: 35px;
  background-color: ${p => p.theme.colors.primary_2};
  border: none;
  box-shadow: 0px 4px 10px 1px ${p => p.theme.colors.primary_2};
  border-radius: 10px;
  :disabled {
    background-color: ${p => p.theme.colors.primary};
    box-shadow: 0px 4px 10px 1px ${p => p.theme.colors.primary};
  }
  :not(:disabled):hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

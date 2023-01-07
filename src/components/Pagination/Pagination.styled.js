import { Container } from 'App.styled';
import styled from 'styled-components';

export const PaginationBox = styled(Container)`
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
    & svg {
      color: ${p => p.theme.colors.primary_2};
    }
  }
  :not(:disabled):hover {
    background-color: ${p => p.theme.colors.hovered};
    & svg {
      color: ${p => p.theme.colors.primary_2};
    }
  }
  & svg {
    width: 100%;
    height: 100%;
    color: ${p => p.theme.colors.accent};
  }
`;

export const PaginationSelect = styled.select`
  width: 15%;
  text-align: center;
  height: 35px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  & :optional {
    background-color: red;
  }
`;

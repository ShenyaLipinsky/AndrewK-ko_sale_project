import { Container } from 'App.styled';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  button {
    width: 100%;
  }
`;
export const InputContainer = styled(Form.Group)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[6]}px;
`;
export const InputStyled = styled(Form.Control)`
  width: 250px;
  margin-left: ${p => p.theme.space[3]}px;
  &.error {
    border: 2px solid #ff6565;
    border-radius: 2px;
  }
`;
export const ErrorMessageBox = styled.div`
  &.error-message {
    color: #ff6565;
    position: absolute;
    font-size: 0.8em;
    top: 24px;
    width: 100%;
    text-align: center;
  }
`;

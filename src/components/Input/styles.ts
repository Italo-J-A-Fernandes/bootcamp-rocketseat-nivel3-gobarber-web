import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  transition: color 0.5s, border-color 0.5s;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9900;
      border-color: #ff9900;
    `}

  ${props =>
    props.isField &&
    css`
      color: #ff9900;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

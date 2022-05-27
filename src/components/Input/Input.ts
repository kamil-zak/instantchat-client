import styled from 'styled-components';

interface IInputProps {
  danger?: boolean;
}

const Input = styled.input<IInputProps>`
  width: 250px;
  height: 27px;
  border: none;
  padding: 5px;
  border-bottom: 2px solid ${({ theme, danger }) => theme.colors[danger ? 'danger' : 'primaryDark']};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  &:focus {
    outline: none;
    background: #eee;
  }
`;

export default Input;

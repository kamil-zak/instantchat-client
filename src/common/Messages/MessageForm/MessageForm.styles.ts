import styled from 'styled-components';

export const ResponseFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 5px;
  border-top: 1px solid #ddd;
  margin: 0;

  &__input {
    background: none;
    border: 0;
    &:focus {
      outline: none;
    }
  }
`;

export const ResponseFormInput = styled.input.attrs(() => ({ placeholder: 'Wpisz wiadomość...' }))`
  background: none;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const ResponseFormSubmit = styled.button`
  color: rgba(35, 27, 164, 1);
  padding: 5px;
  background: none;
  border: 0;
  cursor: pointer;
`;

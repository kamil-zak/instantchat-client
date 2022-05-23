import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 30px;
  background: linear-gradient(90deg, rgb(47, 38, 167) 0%, rgb(68, 93, 192) 100%);
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export default Button;

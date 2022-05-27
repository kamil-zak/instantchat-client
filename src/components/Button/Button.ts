import styled, { css, DefaultTheme } from 'styled-components';

interface IButtonProps {
  bordered?: boolean;
  color?: keyof DefaultTheme['colors'];
}

const Button = styled.button<IButtonProps>`
  padding: 10px 30px;
  background: ${({ theme, color = 'primary' }) => theme.colors[color]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${({ theme, color = 'primary' }) => theme.colors[color]};
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  ${({ bordered }) =>
    bordered &&
    css<IButtonProps>`
      background: transparent;
      color: ${({ theme, color = 'primary' }) => theme.colors[color]};
    `}

  &:hover {
    background: transparent;
    color: ${({ theme, color = 'primary' }) => theme.colors[color]};

    ${({ bordered }) =>
      bordered &&
      css<IButtonProps>`
        background: ${({ theme, color = 'primary' }) => theme.colors[color]};
        color: white;
      `}
  }
`;

export default Button;

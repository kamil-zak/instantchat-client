import styled, { css, DefaultTheme } from 'styled-components';
import { rotate } from '../../styles/animations';

interface IButtonProps {
  bordered?: boolean;
  color?: keyof DefaultTheme['colors'];
  spinner?: boolean;
}

const Button = styled.button<IButtonProps>`
  --color: ${({ theme, color = 'primary', spinner }) => theme.colors[spinner ? 'grayLight' : color]};
  --background: ${({ bordered }) => (bordered ? 'white' : 'var(--color)')};
  --content: ${({ bordered }) => (!bordered ? 'white' : 'var(--color)')};
  padding: 10px 30px;
  background: var(--background);
  color: var(--content);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid var(--color);

  ${({ spinner }) =>
    spinner
      ? css`
          color: transparent;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border: 2px solid var(--content);
            border-color: var(--content) var(--content) var(--content) transparent;
            border-radius: 50%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            animation: ${rotate} 0.8s infinite linear;
          }
        `
      : css`
          transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
          &:hover {
            background: var(--content);
            color: var(--background);
          }
        `}
`;

export default Button;

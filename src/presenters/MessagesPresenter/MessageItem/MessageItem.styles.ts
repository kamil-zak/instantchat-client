import styled, { css } from 'styled-components';
import { slideIn } from '../../../styles/animations';
import { getContrastColor } from '../../../utils/colors';

interface WrapperProps {
  isResponse: boolean;
}
export const MessageItemWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  animation: ${slideIn(5)} 0.3s ease-in-out;
  max-width: 100%;
  &:first-child {
    margin-top: auto;
  }

  ${({ isResponse }) =>
    isResponse &&
    css`
      margin-right: 0;
      margin-left: auto;
    `}
`;

export const MessageItemContent = styled.div.attrs<WrapperProps>(({ theme, isResponse }) => ({
  style: isResponse ? { background: theme.colors.primary, color: getContrastColor(theme.colors.primary) } : {},
}))<WrapperProps>`
  padding: 10px;
  margin: 0;
  background: lightgray;
  color: black;
  border-radius: 10px;
  font-size: 14px;
  overflow-wrap: break-word;
`;

export const MessageItemTime = styled.div<WrapperProps>`
  align-self: ${({ isResponse }) => (isResponse ? 'flex-end' : 'flex-start')};
  padding: 3px;
`;

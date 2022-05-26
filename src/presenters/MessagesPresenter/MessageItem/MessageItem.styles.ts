import styled, { css } from 'styled-components';
import { slideIn } from '../../../styles/animations';

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

export const MessageItemContent = styled.div<WrapperProps>`
  padding: 10px;
  margin: 0;

  background: lightgray;
  color: black;
  border-radius: 10px;
  font-size: 14px;
  overflow-wrap: break-word;

  ${({ isResponse }) =>
    isResponse &&
    css`
      background: linear-gradient(90deg, rgb(47, 38, 167) 0%, rgb(68, 93, 192) 100%);
      color: white;
    `}
`;

export const MessageItemTime = styled.div<WrapperProps>`
  align-self: ${({ isResponse }) => (isResponse ? 'flex-end' : 'flex-start')};
  padding: 3px;
`;

import styled from 'styled-components';
import { chatBoxDimensions } from '../../constants/config';
import { slideIn } from '../../styles/animations';
import { getContrastColor } from '../../utils/colors';

export const ChatBoxWrapper = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  width: ${chatBoxDimensions.width}px;
  height: ${chatBoxDimensions.height}px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  display: grid;
  grid-template-rows: 80px calc(420px);
  animation: ${slideIn(40)} 0.3s ease-in-out;
`;

export const ChatBoxHeader = styled.div.attrs(({ theme }) => ({
  style: {
    background: theme.colors.primary,
    color: getContrastColor(theme.colors.primary),
  },
}))`
  position: relative;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  transition: background-color 0.3s ease-in-out;
`;

export const ChatBoxCloseBtn = styled.div.attrs(({ theme }) => ({
  style: { color: getContrastColor(theme.colors.primary) },
}))`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
`;

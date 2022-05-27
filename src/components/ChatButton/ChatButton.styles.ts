import styled from 'styled-components';
import { chatBoxButtonDimensions } from '../../constants/config';
import { getContrastColor } from '../../utils/colors';

export const ChatButtonWrapper = styled.button.attrs(({ theme }) => ({
  style: {
    background: theme.colors.primary,
    color: getContrastColor(theme.colors.primary),
  },
}))`
  width: ${chatBoxButtonDimensions.width}px;
  height: ${chatBoxButtonDimensions.height}px;

  border-radius: 35px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

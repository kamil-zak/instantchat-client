import styled from 'styled-components';
import { chatBoxButtonDimensions } from '../../../constants/config';

export const ChatButtonWrapper = styled.button`
  color: white;
  width: ${chatBoxButtonDimensions.width}px;
  height: ${chatBoxButtonDimensions.height}px;
  background: linear-gradient(90deg, rgba(35, 27, 164, 1) 0%, rgba(82, 108, 214, 1) 100%);

  border-radius: 35px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

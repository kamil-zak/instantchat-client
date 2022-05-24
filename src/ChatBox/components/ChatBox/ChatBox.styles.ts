import styled from 'styled-components';
import { ChatBoxDimensions } from '../../../constants/config';
import { slideIn } from '../../../styles/animations';

export const ChatBoxWrapper = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  width: ${ChatBoxDimensions.width}px;
  height: ${ChatBoxDimensions.height}px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: grid;
  grid-template-rows: 80px calc(420px);
  animation: ${slideIn(40)} 0.3s ease-in-out;
`;

export const ChatBoxHeader = styled.div`
  position: relative;
  background: linear-gradient(90deg, rgba(35, 27, 164, 1) 0%, rgba(82, 108, 214, 1) 100%);
  padding: 0 10px;
  color: white;
  display: flex;
  align-items: center;
`;

export const ChatBoxCloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
`;

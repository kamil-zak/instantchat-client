import styled, { keyframes } from 'styled-components';
import { fadeIn } from '../../styles/animations';

const move = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(200px)
    }
`;

export const LoadingBar = styled.div`
  position: relative;
  width: 200px;
  height: 10px;
  margin: 20px auto;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 1s linear;
  animation-fill-mode: backwards;
  animation-delay: 1s;

  &::after {
    content: '';
    position: absolute;
    height: 10px;
    width: 40px;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${move} 1s infinite ease-in-out;
  }
`;

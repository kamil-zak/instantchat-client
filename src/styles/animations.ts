import { keyframes } from 'styled-components';

export const slideIn = (translate: number) => keyframes`
from {
       transform: translateY(${translate}px);
       opacity: 0;
   }
   to {
       transform: translateY(0px);
       opacity: 1;
   }
`;

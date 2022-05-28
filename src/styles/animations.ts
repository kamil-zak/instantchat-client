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

export const fadeIn = keyframes`    
    from {
       opacity: 0;
   }
   to {
       opacity: 1;
   }
`;

export const rotate = keyframes`
from {
       transform: rotate(0);
   }
   to {
       transform: rotate(360deg);
   }
`;

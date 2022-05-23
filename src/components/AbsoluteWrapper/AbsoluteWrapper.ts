import styled from 'styled-components';

type Positions = 'center' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';

const getLeftValue = (position: Positions) => {
  if (position.includes('left')) return 0;
  if (position.includes('right')) return 100;
  return 50;
};

const getTopValue = (position: Positions) => {
  if (position.includes('top')) return 0;
  if (position.includes('bottom')) return 100;
  return 50;
};

interface IAbsoluteWrapperProps {
  position?: Positions;
}

const AbsoluteWrapper = styled.div<IAbsoluteWrapperProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${({ position = 'center' }) => getLeftValue(position)}%;
  top: ${({ position = 'center' }) => getTopValue(position)}%;
`;

export default AbsoluteWrapper;

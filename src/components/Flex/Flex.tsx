import styled from 'styled-components';

interface IFlexProps {
  direction?: 'column' | 'row';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  gap?: number;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap = 20 }) => gap}px;
  flex-direction: ${({ direction = 'column' }) => direction};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
`;

export default Flex;

import styled from 'styled-components';

type position = 'stretch' | 'start' | 'center' | 'end';

interface ILayoutItemProps {
  area?: string;
  align?: position;
  justify?: position;
}

const LayoutItem = styled.div<ILayoutItemProps>`
  ${({ area }) => area && `grid-area: ${area};`}
  ${({ align }) => align && `align-self: ${align};`}
  ${({ justify }) => justify && `justify-self: ${justify};`}
`;

export default LayoutItem;

import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ITextProps {
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSizes'];
  center?: boolean;
  bold?: boolean;
}

const StyledText = styled.div<ITextProps>`
  margin: 0;
  padding: 0;
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: ${({ theme, size = 'base' }) => theme.fontSizes[size]};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;

export default StyledText;

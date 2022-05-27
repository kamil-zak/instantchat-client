import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface IColorsProviderProps extends Partial<DefaultTheme['colors']> {
  children: ReactNode;
}

const ColorsProvider = ({ children, ...colors }: IColorsProviderProps) => {
  return <ThemeProvider theme={(theme) => ({ ...theme, colors: { ...theme.colors, ...colors } })}>{children}</ThemeProvider>;
};

export default ColorsProvider;

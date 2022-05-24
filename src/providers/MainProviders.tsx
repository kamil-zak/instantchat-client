import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import client from '../apollo/client';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

interface IMainProvidersProps {
  children: ReactNode;
}

const MainProviders = ({ children }: IMainProvidersProps) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  </ApolloProvider>
);

export default MainProviders;

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import client from './apollo/client';
import App from './App';
import { AuthProvider } from './providers/AuthProvider';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import chatBoxClient from './apollo/chatBoxClient';
import ChatBoxApp from './ChatBox/ChatBoxApp';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import './utils/dayjsConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={chatBoxClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ChatBoxApp />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

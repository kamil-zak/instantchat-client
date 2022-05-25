import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import getClient from './apollo/client';
import ChatBoxApp from './ChatBox/ChatBoxApp';
import { getConversationToken } from './services/chatbox';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import './utils/dayjsConfig';

const client = getClient(getConversationToken);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ChatBoxApp />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

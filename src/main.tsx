import { ApolloProvider } from '@apollo/client';
import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import client from './apollo/client';
import App from './App';
import { AuthProvider } from './providers/AuthProvider';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-toastify/dist/ReactToastify.css';

dayjs.extend(isToday);
dayjs.extend(relativeTime);

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

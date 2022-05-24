import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatBoxApp from './ChatBox/ChatBoxApp';
import MainProviders from './providers/MainProviders';
import './utils/dayjsConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProviders>
      <ChatBoxApp />
    </MainProviders>
  </React.StrictMode>,
);

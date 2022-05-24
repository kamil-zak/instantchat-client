import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './providers/AuthProvider';
import './utils/dayjsConfig';

import 'react-toastify/dist/ReactToastify.css';
import MainProviders from './providers/MainProviders';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProviders>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainProviders>
  </React.StrictMode>,
);

import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './app/App';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from './app/store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

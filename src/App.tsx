import React from 'react';
import { BrowserRouter as BRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <BRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BRouter>
);

export default App;

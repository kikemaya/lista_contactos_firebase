import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/styles/Global';

import App from './App';
import Error404 from './components/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
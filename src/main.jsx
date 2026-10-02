import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import PortfolioProvider from './context/portfolio-provider.jsx';
import theme from './theme.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <PortfolioProvider>
          <App />
        </PortfolioProvider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.scss';

const siteTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={siteTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)

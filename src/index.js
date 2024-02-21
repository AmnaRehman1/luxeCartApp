import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { EcommerceInformationProvider } from './context/EcommerceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommerceInformationProvider>
        <App />
      </EcommerceInformationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

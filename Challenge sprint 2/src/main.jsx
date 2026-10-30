import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProvedorTema } from './contextos/TemaContexto';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </React.StrictMode>
);

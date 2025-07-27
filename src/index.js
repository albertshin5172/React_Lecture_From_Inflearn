import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Component'; // 폴더 내 index.js면, ext 없이 폴더명만 import 가능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
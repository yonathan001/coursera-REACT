import './index.css';

import App from './App';
import Apples from './components/Apples'
import Nav from './components/Nav';
import Promo from './components/Promo';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Promo />
  </React.StrictMode>

  
);




reportWebVitals();

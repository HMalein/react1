import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
        // Loogelised sulud, selleks et v]tta osa router-domist
import { BrowserRouter } from 'react-router-dom';

//BrowserRouter v]imaldab URLi muuta ehk localhost:3000/midagi-muud
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


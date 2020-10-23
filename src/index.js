import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.scss';
import './index.scss';
import AppRouter from './router/index'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
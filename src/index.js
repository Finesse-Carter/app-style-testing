import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Header from './Header';

render(
  <React.StrictMode>
    <App />
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);



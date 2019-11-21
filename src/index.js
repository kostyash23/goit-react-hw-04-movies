import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App.jsx';

ReactDOM.render(
  <HashRouter basename="/goit-react-hw-04-movies">
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './index.css';

ReactDOM.render(
  <Router routes={routes} history={hashHistory}/>,
  document.getElementById('root')
);

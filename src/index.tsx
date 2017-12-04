import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter } from '@uirouter/react';

import registerServiceWorker from './registerServiceWorker';

import routerConfig from './routes';
import App from './App';
import './index.css';

ReactDOM.render(
  <UIRouter {...routerConfig}>
    <App />
  </UIRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

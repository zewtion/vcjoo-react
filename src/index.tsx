import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Step1 from './Step1';


ReactDOM.render(
  <Step1 />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

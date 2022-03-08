import './index.css';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents-icons/dist/AllIcons';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

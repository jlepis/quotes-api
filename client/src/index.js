import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.css'
import './index.css';

const run = () => {
  ReactDOM.render(<App/>, document.getElementById('root'));
};

window.addEventListener('DOMContentLoaded', run);

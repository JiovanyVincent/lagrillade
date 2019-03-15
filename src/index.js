import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';
import './index.scss';

library.add(faTimes)

class Index extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<Index />, root);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import './index.scss';

class Index extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<Index />, root);
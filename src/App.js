import React from 'react';
import { Header } from './Header';

export default class App extends React.Component {
  render() {
    const title = "Caribbean's Food Mix";
    return (
      <div className="container">
        <h1>{title}</h1>
        <Header />
      </div>
    );
  }
}
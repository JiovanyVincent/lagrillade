import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Menu } from './Menu';
import { OrderOnline } from './OrderOnline';
import { Contact } from './Contact';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <hr />
          <Route path="/home" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
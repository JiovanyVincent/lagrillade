import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Menu } from './Menu';
import { OrderOnline } from './OrderOnline';
import { Contact } from './Contact';
import { SocialNetwork } from './components/SocialNetwork';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{margin: 0, padding: 0}}>
          <SocialNetwork />
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
      
    );
  }
}
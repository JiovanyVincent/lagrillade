import React from 'react';
import { HashRouter, Route, } from 'react-router-dom';
import { Header } from './views/Header';
import { Home } from './views/Home';
import { Menu } from './views/Menu';
import { Contact } from './views/Contact';
import { OrderOnline } from './views/OrderOnline';
import { SocialNetwork } from './components/SocialNetwork';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div style={{margin: 0, padding: 0}}>
          <SocialNetwork />
          <Header />
          <HashRouter basename="/" />
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
      
    );
  }
}
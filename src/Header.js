import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './components/Logo';
import { ButtonTogglerDisplay } from './components/ButtonTogglerDisplay';

export class Header extends React.Component {
  render() {
    return (
      <div id="header" className="container-fluid">
        <Logo />
        <nav className="navbar navbar-expand-lg navbar-light justify-content-start">
          <ButtonTogglerDisplay />
          <div id="navbar-link" className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item active"><Link className="nav-link link" to="/home">Home</Link></li>
              <li><Link className="nav-link link" to="/menu">Menu</Link></li>
              <li><Link className="nav-link link" to="/order-online">Order-online</Link></li>
              <li><Link className="nav-link link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
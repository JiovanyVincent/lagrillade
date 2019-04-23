import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { ButtonCollapse } from '../components/ButtonCollapse';

export class Header extends React.Component {
  
  render() {    
    return (
      <div id="header" className="container-fluid">
        <Logo />
        <nav className="navbar navbar-expand-lg navbar-light justify-content-start">
          <ButtonCollapse />
          <div id="navbar-link" className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <NavLink id="firstL" activeStyle={{border: '1px solid #ffb74d', borderRadius: 3}} className="nav-link link" exact to="/">Accueil</NavLink>
              <NavLink activeStyle={{border: '1px solid #ffb74d', borderRadius: 3}} className="nav-link link" to="/menu">Menu</NavLink>
              <NavLink activeStyle={{border: '1px solid #ffb74d', borderRadius: 3}} className="nav-link link" to="/order-online">Commande-en-ligne</NavLink>
              <NavLink activeStyle={{border: '1px solid #ffb74d', borderRadius: 3}} className="nav-link link" to="/contact">Contact</NavLink>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
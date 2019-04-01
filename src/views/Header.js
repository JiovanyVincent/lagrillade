import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { ButtonCollapse } from '../components/ButtonCollapse';
import { SiblingLinks } from '../components/SiblingLinks';

export class Header extends React.Component {
  
  render() {    
    SiblingLinks();
    return (
      <div id="header" className="container-fluid">
        <Logo />
        <nav className="navbar navbar-expand-lg navbar-light justify-content-start">
          <ButtonCollapse />
          <div id="navbar-link" className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <Link id="firstL" className="nav-link link" to="/">Accueil</Link>
              <Link className="nav-link link" to="/menu">Menu</Link>
              <Link className="nav-link link" to="/order-online">Commande-en-ligne</Link>
              <Link className="nav-link link" to="/contact">Contact</Link>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
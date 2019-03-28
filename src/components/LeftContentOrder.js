import React from 'react';
import {Link} from 'react-router-dom';

export const LeftContentOrder = () => {
  return (
    <div>
      <div className="user-auth">
        <h3>Bonjour, invité</h3>
      </div>
      <div className="dropdown">
        <h4 className="dropdown-toggle">Menu</h4>
        <div className="menu">
          <Link to="dish">Plats</Link>
          <Link to="">Burgers</Link>
          <Link to="">Desserts</Link>
          <Link to="">Drinks</Link>
        </div>
      </div>
    </div>
  );
}
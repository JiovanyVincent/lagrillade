import React from 'react';
import logo from '../assets/Images/logo/e126462f.png';

export const Logo = (props) => {
  const titleLogo = "Caribbean's Food Mix";
  return (
    <div className="logo container">
      <h1>{titleLogo}</h1>
      <img className="image-logo img-fluid" src={logo} alt="" />
    </div>
  );
}
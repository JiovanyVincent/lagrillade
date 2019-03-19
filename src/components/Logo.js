import React from 'react';
// import logo from '../assets/Images/logo/logo.png';
// import logo from '../assets/Images/logo/logo.png';
// import logo from '../assets/Images/logo/logo.png';
import grill from '../assets/Images/logo/Grillade-rond.png';

export const Logo = (props) => {
  const infos = {
    address: "5 Avenue jean-paul 94260 FRESNES",
    telNumber: "+33 64 45 76 98",
    pub: "élu meilleur Restaurant Grill créole",
    pubYear: "de l'année 2018."
  }
  return (
    <div id="logo" className="container">
      <div className="infos">
        <div>
          <h4>
          {infos.address}
          <br />
          {infos.telNumber}
          </h4>
        </div>
        <div>
        <img className="image-logo img-fluid" src={grill} alt="" />
        </div>
        <div>
          <h4 className="winYear">
          {infos.pub}
          <br />
          {infos.pubYear}
          </h4>
        </div>
      </div>
    </div>
  );
}
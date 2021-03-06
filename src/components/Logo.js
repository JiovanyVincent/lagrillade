import React from 'react';
import grill from '../assets/Images/logo/Grillade-rond.png';

export const Logo = (props) => {
  const infos = {
    address: "6 Avenue Maurice Ravel 92160 ANTONY",
    telNumber: "+33 9 94 45 76 98",
    pub: "élu meilleur Restaurant Grill",
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
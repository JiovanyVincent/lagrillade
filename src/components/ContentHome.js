import React from 'react';
import ribs from '../assets/Images/master-cook/PorkRibs.png';
import brochette  from '../assets/Images/master-cook/brochette.png';
import steak from '../assets/Images/master-cook/steakGrill.jpg';

export const ContentHome = (props) => {
    return (
      <div id="content-home">
        <div className="row">
          <div className="col-sm">
          <img className="master-cook img-fluid" src={ribs} alt="the beef"></img>
          </div>
        <div className="col-sm">
          <img className="master-cook img-fluid" src={brochette} alt="the brochette"></img>
        </div>
        <div className="col-sm">
          <img className="master-cook img-fluid" src={steak} alt="the steak"></img>
        </div>
        </div>
      </div>
    );
  }

import React from 'react';
import cooking  from '../assets/Images/master-cook/mastercook.jpg';

export const ContentHome = (props) => {
    return (
      <div>
        <div className="ok">
          <h1 className="mainTitle">{props.carousel}</h1>
          <img className="master-cook img-fluid" src={cooking} alt="the master cook"></img>
        </div>
      </div>
    );
  }

import React from 'react';
import ribs from '../assets/Images/food-mix/PorkRibs.png';
import skewer  from '../assets/Images/food-mix/brochette.png';
import steak from '../assets/Images/food-mix/steakGrill.jpg';
import pictureRestau from '../assets/Images/cooking.png';
import Yang from '../assets/Images/master-cook/Yang.jpg';
import Ayo from '../assets/Images/master-cook/Ayo.jpg';
import PropTypes from 'prop-types';

export const ContentHome = (props) => {
    return (
      <div>
        <div id="section1">
          <h3 className="title-section1">{props.TitleOne}</h3>
          <div id="content-section1">
            <div id="about" className="row">
              <div className="col-sm">
                <img className="img-fluid" src={pictureRestau} alt="" />
              </div>
              <div className="col-sm">
                <h3>{props.SubtitleOne}</h3>
                <p>{props.ParagAbout}</p>
              </div>
            </div>
            <div className="subtitle">
              <h3>{props.SubtitleTwo}</h3>
            </div>
            <div id="concept" className="row">
              <div className="col-sm">
                <h4>01</h4>
                <p>{props.Concept1}</p>
              </div>
              <div className="col-sm">
                <h4>02</h4>
                <p>{props.Concept2}</p>
              </div>
              <div className="col-sm">
                <h4>03</h4>
                <p>{props.Concept3}</p>
              </div>
            </div>
          </div> 
        </div>
        <div id="section2">
          <h3>{props.TitleTwo}</h3>
          <div id="content-section2">
            <div className="row">
              <div className="col-sm">
              <img className="master-cook img-fluid" src={ribs} alt="the beef" />
              </div>
              <div className="col-sm">
                <img className="master-cook img-fluid" src={skewer} alt="the chicken skewer" />
              </div>
              <div className="col-sm">
                <img style={{marginBottom: 0}} className="master-cook img-fluid" src={steak} alt="the steak" />
              </div>
            </div>
          </div>
        </div>
        <div id="section3">
          <h3>{props.TitleThree}</h3>
          <div id="team" className="row">
            <div className="col-sm card">
              <img className="img-fluid" src={Yang} alt="chef-M-White"/>
              <div className="card-body">
                <h4>Chef Michael White</h4>
              </div>
            </div>
            <div className="col-sm card">
              <img className="img-fluid" src={Ayo} alt="chef-ayo"/>
              <div className="card-body">
                <h4>Chef Ayo Adeyemi</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  ContentHome.propTypes = {
    TitleOne: PropTypes.string,
    TitleTwo: PropTypes.string,
    SubtitleOne: PropTypes.string,
    ParagAbout: PropTypes.string,
    Concept1: PropTypes.string,
    Concept2: PropTypes.string,
    Concept3: PropTypes.string,
    parag1: PropTypes.string,
    parag2: PropTypes.string
  }

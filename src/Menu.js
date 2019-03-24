import React from 'react';
import { ContentMenu } from './components/ContentMenu';
import accras from './assets/Images/food-mix/accras.jpg';
import bbq from './assets/Images/food-mix/bbq.jpg';
import ribs from './assets/Images/food-mix/PorkRibs.png';
import montBlanc from './assets/Images/desserts/mont-blanc.jpg';

export class Menu extends React.Component {
  render() {
    const images = [accras, bbq, ribs, montBlanc];
    const listImages = images.map((image, i) =>
                      <div>
                        <img className="images-menu img-fluid rounded" 
                        key={"image_" + i} 
                        src={image} 
                        alt="" />
                      </div> )
    return (
      <div>
        <ContentMenu listImage={listImages}/>
      </div>
    );
  }
}
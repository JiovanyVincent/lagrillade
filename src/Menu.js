import React from 'react';
import { ContentMenu } from './components/ContentMenu';
import accras from './assets/Images/food-mix/accras.jpg';
// import bbq from './assets/Images/food-mix/bbq.jpg';
import ribs from './assets/Images/food-mix/PorkRibs.png';
import montBlanc from './assets/Images/desserts/mont-blanc.jpg';

export class Menu extends React.Component {
  render() {
    const dishes = [
      { id: 1, image: accras, name: "Accras", price: "€5", description: "Recette des antilles très délicieuse avec sa sauce accras. (poulet, morue ou végétarien)." },
      { id: 2, image: ribs, name: "Ribs", price: "€5", description: "Inspiré par la cuisine familiale découvrez une version revisité de nos ribs traditionnel."} 
    ],
      desserts = [
        { id: 3, image: montBlanc, name: "Mont-Blanc", price: "€4", description: "Un dessert sublimement beau et délicieusement bon." }
      ];

    const listDishes = dishes.map((dish) =>
                      <div className="container">
                        <img className="images-menu img-fluid rounded" 
                        key={dish.id} 
                        src={dish.image} 
                        alt="" />
                        <span>{dish.name}</span>
                        <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>
                        <span>{dish.price}</span>
                        <p>{dish.description}</p>
                      </div>),
            listDesserts = desserts.map((dessert) =>
                          <div className="container">
                            <img className="images-menu img-fluid rounded"
                            key={dessert.id}
                            src={dessert.image}
                            alt="" />
                            <span>{dessert.name}</span>
                            <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>
                            <span>{dessert.price}</span>
                            <p>{dessert.description}</p>
                          </div>);
    return (
      <div>
        <ContentMenu listDish={listDishes}
                      listDessert={listDesserts} />
      </div>
    );
  }
}
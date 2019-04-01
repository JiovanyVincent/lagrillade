import React from 'react';
import { ContentMenu } from './components/ContentMenu';
import ribs from './assets/Images/food-mix/PorkRibs.png';
import beefSteak from './assets/Images/food-mix/beef-steak-dish.jpg';
import skewer from './assets/Images/food-mix/skewer-dish.jpg';
import burger from './assets/Images/food-mix/burger.jpg';
import hambigesztenye from './assets/Images/food-mix/hambigesztenye.jpg';
import montBlanc from './assets/Images/desserts/mont-blanc.jpg';
import pudding from './assets/Images/desserts/pudding-antillais.jpg';
import robinson from './assets/Images/desserts/robinson.jpg';
import redWine from './assets/Images/drinks/red-wine.jpg';
import mojito from './assets/Images/drinks/mojito.jpg';
import { Footer } from './Footer';

export const dishs = [
  { id: 1, image: ribs, name: "Ribs", price: 12.5, description: "Inspiré par la cuisine familiale découvrez une version revisité de nos ribs traditionnel."},
  { id: 2, image: beefSteak, name: "Entrecôte", price: 15, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur."},
  { id: 3, image: skewer, name: "Brochettes", price: 10, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur."},
],
  burgers = [
    { id: 4, image: burger, name: "Burger classique", price: 7, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur."},
    { id: 5, image: hambigesztenye, name: "hambigesztenye", price: 8.90, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur."}
  ],
  desserts = [
    { id: 6, image: montBlanc, name: "Mont-Blanc", price: 4, description: "Un Mont-Blanc sublimement beau et délicieusement bon." },
    { id: 7, image: pudding, name: "Pudding", price: 4, description: "Un Pudding sublimement beau et délicieusement bon." },
    { id: 8, image: robinson, name: "Robinson", price: 4, description: "Un Robinson sublimement beau et délicieusement bon." }
  ],
  drinks = [
    { id: 9, image: redWine, name: "Verre de vin rouge", price: 4.50, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur." },
    { id: 10, image: mojito, name: "Mojito", price: 3.95, description: "Post hoc impie perpetratum quod in aliis quoque iam timebatur." }
  ];

export class Menu extends React.Component {
  render() {

    const listDishs = dishs.map((dish) =>
                      <div  className="container"
                            key={dish.id}>
                        <img className="images-menu img-fluid rounded"  
                        src={dish.image} 
                        alt="" />
                        <span>{dish.name}</span>
                        <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>
                        <span>{dish.price}</span>
                        <p>{dish.description}</p>
                      </div>),
            listBurgers = burgers.map((burger) =>
                          <div className="container"
                                key={burger.id}>
                            <img className="images-menu img-fluid rounded"
                            src={burger.image}
                            alt="" />
                            <span>{burger.name}</span>
                            <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>
                            <span>{burger.price}</span>
                            <p>{burger.description}</p>
                          </div>),
            listDesserts = desserts.map((dessert) =>
                          <div className="container"
                                key={dessert.id}>
                            <img className="images-menu img-fluid rounded"
                            src={dessert.image}
                            alt="" />
                            <span>{dessert.name}</span>
                            <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</span>
                            <span>{dessert.price}</span>
                            <p>{dessert.description}</p>
                          </div>),
            listDrinks=   drinks.map((drink) =>
                          <div className="container"
                                key={drink.id}>
                            <img className="images-menu img-fluid rounded"
                            src={drink.image}
                            alt="" />
                            <span>{drink.name}</span>
                            <span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </span>
                            <span>{drink.price}</span>
                            <p>{drink.description}</p>
                          </div>);
    return (
      <div>
        <ContentMenu listDish={listDishs}
                      listBurger={listBurgers}
                      listDessert={listDesserts}
                      listDrink={listDrinks} />
                      <Footer />
      </div>
    );
  }
}
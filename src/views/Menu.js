import React from 'react';
import { ContentMenu } from '../components/ContentMenu';
import ribs from '../assets/Images/food-mix/PorkRibs.png';
import beefSteak from '../assets/Images/food-mix/beef-steak-dish.jpg';
import skewer from '../assets/Images/food-mix/skewer-dish.jpg';
import burger from '../assets/Images/food-mix/burger.jpg';
import hambigesztenye from '../assets/Images/food-mix/hambigesztenye.jpg';
import montBlanc from '../assets/Images/desserts/mont-blanc.jpg';
import pudding from '../assets/Images/desserts/pudding-antillais.jpg';
import robinson from '../assets/Images/desserts/robinson.jpg';
import redWine from '../assets/Images/drinks/red-wine.jpg';
import mojito from '../assets/Images/drinks/mojito.jpg';
import { Footer } from '../views/Footer';

export const dishs = [
  { id: 1, image: ribs, name: "Ribs", price: 12.5, description: "Inspirée par la cuisine familiale découvrez une version revisitée de nos ribs."},
  { id: 2, image: beefSteak, name: "Entrecôte", price: 15, description: "Un incontournable que nous vous proposons de revisiter à travers nos plats du jour."},
  { id: 3, image: skewer, name: "Brochettes", price: 10, description: "Poulet, boeuf, délicatement assaissonées et grillées."},
],
  burgers = [
    { id: 4, image: burger, name: "Burger classique", price: 7, description: "Steack 100g ou 200g, sauce spéciale, salade, oignon, fromage. Suppléments bacon et autres à la demande."},
    { id: 5, image: hambigesztenye, name: "Hambigesztenye", price: 8.5, description: "Steack 150g, sauce spéciale, sauce barbecue, oignon, salade, fromage."}
  ],
  desserts = [
    { id: 6, image: montBlanc, name: "Mont-Blanc", price: 4, description: "Un Mont-Blanc à base de crème de noix de coco, citron, soupoudrée de coco râpé. Elu meilleur dessert par nos clients" },
    { id: 7, image: pudding, name: "Pudding", price: 4, description: "Un Pudding à base de rhum blanc, pruneaux, raisins, et touche secrète La Grillade." },
    { id: 8, image: robinson, name: "Robinson", price: 4, description: "Un Robinson à base de confiture de coco, goyave, sublimé de quelques zestes de citron vert." }
  ],
  drinks = [
    { id: 9, image: redWine, name: "Verre de vin rouge", price: 4.5, description: "30cl, 50cl. Château Lafite, Cabernet, Pinot, Merlot." },
    { id: 10, image: mojito, name: "Mojito", price: 3.5, description: "Rhum blanc HSE, menthe, citron, limonade." }
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
                        <span>{dish.price}€</span>
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
                            <span>{burger.price}€</span>
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
                            <span>{dessert.price}€</span>
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
                            <span>{drink.price}€</span>
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
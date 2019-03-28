import React from 'react';
import { MainContentOrder } from './components/MainContentOrder';
import { RightContentOrder } from './components/RightContentOrder';
import { dishs, burgers, desserts, drinks } from './Menu';
import { Footer } from './Footer';

export class OrderOnline extends React.Component {
  render() {

    const listDishs = dishs.map((dish) => 
                      <div className="container"
                            style={{borderBottom: "1px dotted #eee",
                                    marginBottom: 20}}>
                        <div className="name-price-items">
                          <p style={{color: "#bd884d",
                                    fontSize: 18}}>{dish.name}</p>
                          <p style={{color: "#bd884d",
                                    fontSize: 18}}>{dish.price}</p> 
                        </div>
                        <p>{dish.description}</p>
                        <button className="btn btn-light"
                                style={{marginBottom: 20}}>Ajouter</button>
                    </div>),
          listBurgers = burgers.map((burger) => 
                        <div className="container"
                              style={{borderBottom: "1px dotted #eee",
                                      marginBottom: 20}}>
                          <div className="name-price-items">
                            <p style={{color: "#bd884d",
                                      fontSize: 18}}>{burger.name}</p>
                            <p style={{color: "#bd884d",
                                      fontSize: 18}}>{burger.price}</p> 
                          </div>
                          <p>{burger.description}</p>
                          <button className="btn btn-light"
                                  style={{marginBottom: 20}}>Ajouter</button>
                      </div>),
        listDesserts = desserts.map((dessert) => 
                      <div className="container"
                            style={{borderBottom: "1px dotted #eee",
                                    marginBottom: 20}}>
                        <div className="name-price-items">
                          <p style={{color: "#bd884d",
                                    fontSize: 18}}>{dessert.name}</p>
                          <p style={{color: "#bd884d",
                                    fontSize: 18}}>{dessert.price}</p> 
                        </div>
                        <p>{dessert.description}</p>
                        <button className="btn btn-light"
                                style={{marginBottom: 20}}>Ajouter</button>
                    </div>),
      listDrinks = drinks.map((drink) => 
                  <div className="container"
                        style={{borderBottom: "1px dotted #eee",
                                marginBottom: 20}}>
                    <div className="name-price-items">
                      <p style={{color: "#bd884d",
                                fontSize: 18}}>{drink.name}</p>
                      <p style={{color: "#bd884d",
                                fontSize: 18}}>{drink.price}</p> 
                    </div>
                    <p>{drink.description}</p>
                    <button className="btn btn-light"
                            style={{marginBottom: 20}}>Ajouter</button>
                </div>);

    return (
      <div>
        <div id="content-order">
          <div className="main-content-order">
            <MainContentOrder listDish={listDishs}
                              listBurger={listBurgers}
                              listDessert={listDesserts}
                              listDrink={listDrinks}/>
          </div>
          <div className="right-content-order">
            <RightContentOrder />
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

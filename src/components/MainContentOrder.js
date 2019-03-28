import React from 'react';

export const MainContentOrder = (props) => {
  return (
    <div>
      <div className="menu-order">
        <h2>Menu à la carte</h2>
        <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.</p>
        <div className="bar-horizontal"></div>
      </div>
      <div className="list-items">
        <h4>Plats</h4>
        {props.listDish}
        <h4>Burgers</h4>
        {props.listBurger}
        <h4>Desserts</h4>
        {props.listDessert}
        <h4>Boissons</h4>
        {props.listDrink}
      </div>
    </div>
    ); 
}
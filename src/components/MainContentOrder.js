import React from 'react';
// import { dishs } from '../Menu';

export class MainContentOrder extends React.Component {

  
  render() {
    let dish = this.props.details;
    // let addToCart = this.props.handleClickAddItems(dish);
    return (
      <div>
        <div className="list-items btn btn-dark" 
            onClick={() => this.props.handleClickAddItems(dish)}
            key={dish.id}>
          <p>{dish.name}</p>
          <p>{dish.price}€</p>
          <p  style={{padding: 5,width: 180, backgroundColor: "#eee", color: "black"}} 
              className="btn btn-light" 
              type="button">
              Ajouter au panier
          </p>
          {/* <h4>Burgers</h4>
          {this.props.listBurger}
          <h4>Desserts</h4>
          {this.props.listDessert}
          <h4>Boissons</h4>
        {this.props.listDrink} */}
        </div>
        
        <div className="bar-horizontal2"></div>
      </div>
    ); 
  }
}
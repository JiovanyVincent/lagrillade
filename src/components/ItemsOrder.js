import React from 'react';

export class ItemsOrder extends React.Component {
  
  render() {
    let dish = this.props.details;
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
        </div>
        <div className="bar-horizontal2"></div>
      </div>
    ); 
  }
}
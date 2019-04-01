import React from 'react';

export class DessetOrder extends React.Component {

  
  render() {
    let dessert = this.props.details;
    return (
      <div>
        <div className="list-items btn btn-dark" 
            onClick={() => this.props.handleClickAddItems(dessert)}
            key={dessert.id}>
          <p>{dessert.name}</p>
          <p>{dessert.price}€</p>
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
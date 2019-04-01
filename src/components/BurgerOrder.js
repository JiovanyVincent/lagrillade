import React from 'react';

export class BurgerOrder extends React.Component {

  
  render() {
    let burger = this.props.details;
    return (
      <div>
        <div className="list-items btn btn-dark" 
            onClick={() => this.props.handleClickAddItems(burger)}
            key={burger.id}>
          <p>{burger.name}</p>
          <p>{burger.price}€</p>
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
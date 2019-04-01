import React from 'react';
// import { dishs } from '../Menu';

export const RightContentOrder = (props) => {
  return (
    <div>
      <div id="order">
        <h4>Ma commande<span>( {props.number} article{props.letter} )</span></h4>
      </div>
      <div id="items-added"
            style={{marginLeft: 25}}>

        {props.cart.length > 0 ? props.cart.map((cartItem) => {
          return <p key={cartItem.id}>
                    {cartItem.quantity > 1 ? <span> {cartItem.quantity}x</span> : ''} {cartItem.name} {cartItem.price}€
                  </p> 
        }) : <p>Panier vide</p>}

      </div>
      <div id="subtotal">
        <h4>Sous-total</h4>
        <p>{props.subtotal}€</p>
      </div>
      <button id="order-now">Commander</button>
    </div>
  );
}
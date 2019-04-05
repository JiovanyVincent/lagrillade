import React from 'react';
import { PropTypes } from 'prop-types';

export const CartOrder = (props) => {
  return (
    <div id="cart-order">
      <div id="order">
        <h4>Ma commande<span>( {props.number} article{props.letter} )</span></h4>
      </div>
      <div id="items-added"
            style={{marginLeft: 25}}>
        {props.cart.length > 0 ? props.cart.map((cartItem) => {
          return <p key={cartItem.id}>
                    {cartItem.quantity > 0 ? <span> {cartItem.quantity}x</span> : ''} {cartItem.name} {cartItem.price}€
                    <button className="button-hide btn btn-primary"
                    onClick={() => props.handleCounter(cartItem)}>+</button> 
                    <button className="button-hide btn btn-danger"
                     onClick={() => props.handleReducer(cartItem)}>-</button> 
                  </p> 
        }) : <p>Panier vide</p>}
      </div>
      <div id="subtotal">
        <h4>Sous-total</h4>
        <p>{props.subtotal}€</p>
      </div>
      <button id="order-now"
        onClick={props.handleButtonOrder}>Commander</button>
    </div>
  );
}

CartOrder.propTypes = {
  number: PropTypes.number,
  letter: PropTypes.string,
  cart: PropTypes.array,
  handleCounter: PropTypes.func,
  handleReducer: PropTypes.func,
  subtotal: PropTypes.number,
  handleButtonOrder: PropTypes.func
}
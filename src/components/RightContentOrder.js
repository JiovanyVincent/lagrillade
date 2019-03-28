import React from 'react';

export const RightContentOrder = () => {
  return (
    <div>
      <div id="order">
        <h4>Ma commande<span>( 0 article)</span></h4>
      </div>
      <div id="items-added">
        <h2>Items added</h2>
      </div>
      <div id="subtotal">
        <h4>Sous-total</h4>
        <p>0€</p>
      </div>
      <button id="order-now">Commander</button>
    </div>
  );
}
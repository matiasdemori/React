import React from 'react';
import './CartWidget.scss';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className="imgCarrito" src="./img/Carrito.png" alt="Carrito de Compras" />
      <strong>-</strong>
    </div>
  );
}

export default CartWidget;

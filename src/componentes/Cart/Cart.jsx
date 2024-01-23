import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.scss';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-container">
        <h2>Por el momento no hay productos en el carrito</h2>
        <Link to="/" className="empty-cart-link"> Ver Productos </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map(producto => (
        <div key={producto.item.id} className="cart-item">
          <CartItem {...producto} />
        </div>
      ))}
      
      <div className="cart-summary">
        <h3>Total: $ {total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout" className="checkout-link">Finalizar Compra</Link>
      </div>
    </div>
  );
}

export default Cart;

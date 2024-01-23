import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import './CartWidget.scss';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="cart-widget">
      <Link to="/cart">
      <img className="imgCarrito" src="../img/Carrito.png" alt="Carrito de Compras" />
      {
        cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
      }
    </Link>
    </div >
  );
}

export default CartWidget;


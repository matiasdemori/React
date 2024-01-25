import { useState, useContext } from 'react';
import Contador from '../ItemCount/ItemCount';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

const ItemDetail = ({ id, nombre, img, stock, precio }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const { carrito, agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    const cantidadEnCarrito = carrito.find((item) => item.item.id === id)?.cantidad || 0;

    if (cantidad + cantidadEnCarrito <= stock) {
      setAgregarCantidad(cantidad);
      const item = { id, nombre, precio };
      agregarAlCarrito(item, cantidad);
      setMostrarMensaje(false); 
    } else {
      setMostrarMensaje(true); 
    }
  };

  return (
    <div className="item-detail">
      <img src={img} alt={nombre} />
      <div className="content">
        <div className="title-info">
          <h2>{nombre}</h2>
          <p>Precio: {precio}</p>
          <p>Stock: {stock}</p>
        </div>
        {stock > 0 ? (
          <>
            {agregarCantidad === 0 ? (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                amet, quasi, repellendus dolore accusamus necessitatibus harum
                maiores adipisci, aperiam deleniti facere vel maxime tempore
                voluptatibus odit reiciendis corporis labore fuga!
              </p>
            ) : null}
            {agregarCantidad > 0 ? (
              <Link to="/cart">Terminar Compra</Link>
            ) : (
              <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
          </>
        ) : (
          <p className="Sin-Stock">Por el momento no hay stock disponible de esta carta.</p>
        )}
        {mostrarMensaje && (
          <p className="mensaje-stock">Has alcanzado el número máximo de stock al intentar agregar al carrito.</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;


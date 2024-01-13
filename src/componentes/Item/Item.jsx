import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ id, nombre, img, stock, precio }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={img} alt={nombre} />
      <div className="item-details">
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`} className="details-link">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;
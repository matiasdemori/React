import React from 'react';
import './ItemDetail.scss';

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="item-detail">
      <h2>Nombre: {nombre}</h2>
      <p>Precio: {precio}</p>
      <p>ID: {id}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam amet, quasi, repellendus
        dolore accusamus necessitatibus harum maiores adipisci, aperiam deleniti facere vel maxime
        tempore voluptatibus odit reiciendis corporis labore fuga!
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
}

export default ItemDetail;
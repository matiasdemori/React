import React, { useState, useEffect } from 'react';
import { getUnProducto } from '../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem).then((respuesta) => setProducto(respuesta));
  }, [idItem]);

  return (
    <div className="item-detail-container">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
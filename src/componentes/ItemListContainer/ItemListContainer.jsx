import React, { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        const respuesta = await funcionProductos(idCategoria);
        setProductos(respuesta);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, [idCategoria]);

  if (productos.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
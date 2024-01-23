import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import './ItemListContainer.scss';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "Inventario"), where("idCat", "==", idCategoria)) : collection(db, "Inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("Error al cargar productos", error))
  }, [idCategoria])

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
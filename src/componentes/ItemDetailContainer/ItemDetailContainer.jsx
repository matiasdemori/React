import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect( () => {
    const nuevoDoc = doc(db, "Inventario", idItem); 

    getDoc(nuevoDoc) 
      .then(res => {
        const data = res.data(); 
        const nuevoProducto = {id: res.id, ...data};
        setProducto(nuevoProducto);
      } )
      .catch(error => console.log("No carga la informacion", error))
  }, [idItem]) 

  return (
    <div className="item-detail-container">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;


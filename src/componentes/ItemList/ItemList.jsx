import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ({ productos }) => {
  if (!Array.isArray(productos)) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <div className="item-list">
      {productos.map((producto) => (
        <div className="item" key={producto.id}>
          <Item {...producto} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;


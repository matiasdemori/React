import { useState } from "react";
import './ItemCount.scss';

const Contador = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if(contador < stock) {
      setContador(contador + 1);
    }
  }

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="contador">
      <button onClick={restarContador}> - </button>
      <p> {contador} </p>
      <button onClick={sumarContador}> + </button>

      <button className="agregar-carrito" onClick={() => funcionAgregar(contador)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default Contador;

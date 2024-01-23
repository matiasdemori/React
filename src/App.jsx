import Nabvar from './componentes/Nabvar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import './Style.scss';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <CarritoProvider>
          <Nabvar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Cartas en Venta" />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Cartas en Venta" />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>Sitio en construcción</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


import React from 'react';
import Nabvar from './componentes/Nabvar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import './Style.scss';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Nabvar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Cartas en Venta" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Cartas en Venta" />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
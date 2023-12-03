import Nabvar from "./componentes/Nabvar/Nabvar";
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner";
import './Style.scss';

const App = () => {
  return (
    <div>
      <Nabvar/>
      <ItemListConteiner greeting = "Cartas en Venta"/>
    </div>
   
  )
}

export default App
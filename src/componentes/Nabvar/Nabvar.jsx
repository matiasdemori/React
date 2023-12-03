import CartWidget from '../CartWidget/CartWidget';
import './Nabvar.scss';

const Nabvar = () => {
    return (
        <header>
            <h1>Magic The Gathering</h1>
            <ul>
                <li>Azules</li>
                <li>Negras</li>
                <li>Blancas</li>
                <li>Rojas</li>
                <li>Verdes</li>
            </ul>
            <CartWidget/>
        </header>
    )
}

export default Nabvar
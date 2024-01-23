import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './Nabvar.scss';

const Nabvar = () => {
  return (
    <header className="nav-header">
      <Link className='link' to="/">
        <h1>Magic The Gathering</h1>
      </Link>
      <nav>
        <ul>
          <li className="blanco">
            <NavLink to="/categoria/Blanco">Blancas</NavLink>
          </li>
          <li className="azul">
            <NavLink to="/categoria/Azul">Azules</NavLink>
          </li>
          <li className="negro">
            <NavLink to="/categoria/Negro">Negras</NavLink>
          </li>
          <li className="rojo">
            <NavLink to="/categoria/Rojo">Rojas</NavLink>
          </li>
          <li className="verde">
            <NavLink to="/categoria/Verde">Verdes</NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Nabvar;
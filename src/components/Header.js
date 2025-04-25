import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
return (
    <header className="header">
    <h1>Guru Store</h1>
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
    </nav>
    </header>
);
}

export default Header;

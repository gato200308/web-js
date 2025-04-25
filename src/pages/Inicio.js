import React from 'react';
import './Inicio.css';

function Inicio() {
return (
    <main className="inicio">
    <img src="/images/logotipo.png" alt="Proyecto Integrador" className="logo-proyecto" />
    <p className="descripcion">
Bienvenido a nuestro proyecto integrador, una vitrina digital donde el arte se convierte en producto. Aquí encontrarás una selección exclusiva de artículos hechos a mano con amor, pasión y autenticidad. Cada pieza cuenta una historia y está diseñada para resaltar la belleza de lo artesanal.
    </p>

    <ul className="product-list">
        <li>🖼️ Cuadros decorativos</li>
        <li>💍 Joyería artesanal</li>
        <li>👜 Bolsos personalizados</li>
        <li>🎀 Accesorios únicos</li>
    </ul>
    </main>
);
}

export default Inicio;

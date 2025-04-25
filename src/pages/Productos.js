import React from 'react';
import './Productos.css'; // si quieres usar estilos separados

function Productos() {
  const productos = [
    {
      nombre: 'Bolso Artesanal 1',
      precio: '$45.000',
      imagen: '/images/bolso1.png',
    },
    {
      nombre: 'Bolso Artesanal 2',
      precio: '$50.000',
      imagen: '/images/bolso2.png',
    },
    {
      nombre: 'Bolso Artesanal 3',
      precio: '$40.000',
      imagen: '/images/bolso3.png',
    },
  ];

  return (
    <main>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Nuestros Productos</h2>
      <div className="productos-grid">
        {productos.map((prod, index) => (
          <div className="producto-card" key={index}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p className="precio">{prod.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;

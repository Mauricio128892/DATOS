// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg"> {/* Contenedor con fondo blanco, padding, bordes redondeados y sombra */}
      <h1 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Bienvenido a mi Presentación sobre Bases de Datos</h1> {/* Título azul brillante */}
      <p className="text-gray-700 leading-loose text-lg text-center"> {/* Párrafo gris oscuro, más espaciado, más grande, centrado */}
        Este es un espacio dedicado a explorar el fascinante mundo de las bases de datos. Aquí encontrarás información fundamental, tipos principales y los sistemas de gestión más relevantes. ¡Prepárate para sumergirte en el conocimiento!
      </p>
    </div>
  );
}

export default Home;
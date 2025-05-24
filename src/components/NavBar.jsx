// src/components/NavBar.jsx
import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-md"> {/* Fondo negro muy oscuro */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-400 font-bold text-3xl">Mi Sitio Web de Bases de Datos</div> {/* Título azul claro */}
        <ul className="flex space-x-4 text-gray-300"> {/* Enlaces gris claro */}
          <li><a href="/" className="hover:text-blue-200 transition-colors duration-200">Inicio</a></li> {/* Hover a un azul más claro */}
          <li><a href="/tipos" className="hover:text-blue-200 transition-colors duration-200">Tipos</a></li>
          <li><a href="/sgbd" className="hover:text-blue-200 transition-colors duration-200">SGBD</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
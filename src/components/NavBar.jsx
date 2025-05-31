// D:\React-VS\holaa\react-vite-tailwind-app\src\components\NavBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function NavBar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Sesión cerrada correctamente.');
      navigate('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert('Error al cerrar sesión.');
    }
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-400 font-bold text-3xl">My Page</div>
        <ul className="flex space-x-4 text-gray-300">
          {user ? (
            <>
              <li><Link to="/" className="hover:text-blue-200 transition-colors duration-200">Inicio</Link></li>
              <li><Link to="/tipos" className="hover:text-blue-200 transition-colors duration-200">Tipos</Link></li> {/* <--- ¡Asegúrate que este enlace esté aquí! */}
              <li><Link to="/sgbd" className="hover:text-blue-200 transition-colors duration-200">SGBD</Link></li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <li><Link to="/login" className="hover:text-blue-200 transition-colors duration-200">Iniciar Sesión</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
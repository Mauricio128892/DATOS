// D:\React-VS\holaa\react-vite-tailwind-app\src\App.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Tipos from './components/Tipos'; // <--- ¡Asegúrate que esta línea esté presente!
import SGBD from './components/SGBD';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        navigate('/login');
      } else {
        if (window.location.pathname === '/login') {
          navigate('/');
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white text-xl">Cargando...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar user={user} />
      <div className="flex-grow">
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/tipos" element={<Tipos />} /> {/* <--- ¡Asegúrate que esta ruta esté presente! */}
              <Route path="/sgbd" element={<SGBD />} />
              <Route path="*" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App; 
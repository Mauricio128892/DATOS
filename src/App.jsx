// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

// ¡CAMBIO AQUÍ!
// Cambia a 'index.css' porque ese es el archivo CSS principal de tu proyecto.
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;

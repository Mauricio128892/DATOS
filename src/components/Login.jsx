// D:\React-VS\holaa\src\components\Login.jsx
import React, { useState } from 'react';
// Importa las funciones de autenticación de Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// Importa la instancia 'auth' que exportaste de firebaseConfig.js
import { auth } from '../firebaseConfig'; // <--- ¡Asegúrate que esta ruta sea correcta!

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Para alternar entre registro y login

  const handleAuth = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setError(''); // Limpiar errores previos

    try {
      if (isRegistering) {
        // Lógica de registro con Firebase
        await createUserWithEmailAndPassword(auth, email, password);
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        // Opcional: Podrías cambiar a la vista de login automáticamente
        // setIsRegistering(false);
      } else {
        // Lógica de inicio de sesión con Firebase
        await signInWithEmailAndPassword(auth, email, password);
        alert('¡Inicio de sesión exitoso!');
        // Aquí, en una aplicación real, redirigirías al usuario a su dashboard
        // o cambiarías el estado global para mostrar el contenido principal
      }
    } catch (err) {
      console.error("Error de autenticación:", err.message);
      // Muestra un mensaje de error más amigable basado en el código de error de Firebase
      if (err.code === 'auth/email-already-in-use') {
        setError('El correo electrónico ya está en uso.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Formato de correo electrónico no válido.');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Correo o contraseña incorrectos.');
      } else {
        setError('Error de autenticación. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </h2>
        <form onSubmit={handleAuth}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tu_correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4 text-center">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500 hover:text-blue-800 text-sm"
          >
            {isRegistering ? '¿Ya tienes cuenta? Inicia Sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
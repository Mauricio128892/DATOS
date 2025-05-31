// D:\React-VS\holaa\react-vite-tailwind-app\src\firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Puedes comentar o quitar esta línea si no usas Analytics todavía

// **** CAMBIOS NECESARIOS AQUI ****
// 1. Importar getAuth del módulo 'firebase/auth'
import { getAuth } from "firebase/auth"; // <--- ¡AÑADE ESTA LÍNEA!
// ********************************

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzGh3zGee71H9IO5yHzPwT9Hx3lmkND4g",
  authDomain: "aldo-9ae3b.firebaseapp.com",
  projectId: "aldo-9ae3b",
  storageBucket: "aldo-9ae3b.firebasestorage.app",
  messagingSenderId: "732076502264",
  appId: "1:732076502264:web:39616aa514accf81aa1f0d",
  measurementId: "G-CHWZMNGEK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Puedes comentar o quitar esta línea

// **** CAMBIOS NECESARIOS AQUI ****
// 2. Obtener la instancia de autenticación y exportarla
export const auth = getAuth(app); // <--- ¡AÑADE ESTA LÍNEA!
// ********************************
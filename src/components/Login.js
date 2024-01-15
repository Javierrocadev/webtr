// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import LoginService from "./LoginService";

// const Login = () => {
//   const [correo, setCorreo] = useState("");
//   const [contraseña, setContraseña] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//    await LoginService.login(correo, contraseña);

//     if (localStorage.getItem('token')) {
//       // Redirigir a la página principal
//       Navigate("/");
//     } else {
//       alert("Error al iniciar sesión");
//     }
//   };

//   return (
//     <div>
//       <h1>Iniciar sesión</h1>
//       <input
//         type="email"
//         placeholder="Correo electrónico"
//         value={correo}
//         onChange={(e) => setCorreo(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={contraseña}
//         onChange={(e) => setContraseña(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Iniciar sesión</button>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { AuthContext } from './authContext';

const Login = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    login(email, password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      {/* {!isAuthenticated && (
        <button onClick={logout}>Logout</button>
      )} */}
       <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;

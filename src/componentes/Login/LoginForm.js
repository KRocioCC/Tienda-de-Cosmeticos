import React, { useState } from "react";
import "./LoginForm.css"; // Importa los estilos CSS

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar las credenciales de inicio de sesión
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Por favor ingresa un correo electrónico y una contraseña");
    } else if (email === "usuario@example.com" && password === "contraseña") {
      // Simular inicio de sesión exitoso
      onLogin(true);
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      setErrorMessage("Correo electrónico o contraseña incorrectos");
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <h1 className="login-title">INICIO DE SESIÓN</h1>
          <h2 className="login-subtitle">Inicia sesión con tu cuenta</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Iniciar sesión
        </button>
        <h3 className="register-prompt">¿No tienes cuenta? Regístrate</h3>
      </form>
    </div>
  );
};

export default LoginForm;
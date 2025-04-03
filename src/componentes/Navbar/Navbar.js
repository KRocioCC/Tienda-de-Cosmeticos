import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../Login/LoginForm'; // Asegúrate de que esta ruta sea correcta
import React from 'react';
// Importando estilos
import "./Navbar.css";
import { Link } from "react-router-dom";
// Importa la imagen del logo
import logo from '../../imagenes/logo.jpeg';  // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='navbar-logo' />
            <h1 className='titulo'>
                VENTA DE PRODUCTOS<br />
                cuidamos tu belleza
            </h1>
            <div className='nav-links'>
                <Link className='seeCarrito' to={'/cart'}>Carrito</Link>
                <Link className='seeLogin' to={'/LoginForm'}>Login</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
import React from "react";
// Nabar import
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Productos from "../Productos/Productos";
import { Footer } from '../Footer/Footer'; // Importa el componente Footer


const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <div className="productos-card-container">
          <Productos />
        </div>
        <Footer /> {/* Renderiza el componente Footer */}
    </div>
  )
}

export default Home

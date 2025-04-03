import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from './componentes/Context/DataContext';
import Home from './componentes/Home/Home';
import CartContent from './componentes/CartContent/CartContent';
import Login from './componentes/Login/LoginForm'; // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          
          {/* renderizando componentes */}
          <Route path="/" element={<Home />} />
          {/* para el carrito */}
          <Route path="/cart" element={<CartContent />} />
          
          <Route path="/LoginForm" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
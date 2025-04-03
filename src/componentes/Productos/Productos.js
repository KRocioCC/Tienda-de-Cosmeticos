import { useContext } from "react";
// la que continee el contexto
import { dataContext } from "../Context/DataContext";
import './Productos.css'
import { Link } from 'react-router-dom';

// capturando el producto
const Productos = () => {
const { data, cart, setCart } = useContext (dataContext);

  const ComprarProducto = (Productos) => {
    // copia del carrito y agregamos el producto nuevo
    setCart([...cart, Productos])
    console.log(Productos)

  }
  return data.map((Productos) => {
    return (
      <div>
        <div className="card" key={Productos.id}>
            <img src={Productos.img} alt="img-product-card"/>
            <h3>{Productos.name}</h3>
            <h4>{Productos.price}$</h4>
            <h4>{Productos.description}</h4>

            <button onClick={()=>ComprarProducto(Productos)}>Comprar</button> 
        </div>
      </div>
      );
  });
};

export default Productos

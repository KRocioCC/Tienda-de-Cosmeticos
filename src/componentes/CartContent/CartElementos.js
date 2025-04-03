import { useContext } from "react";
// la que continee el contexto
import { dataContext } from "../Context/DataContext";
import './CartContent.css'

const CartElementos = () => {
const { cart } = useContext(dataContext);
    // recorremos carrito
    return cart.map((Productos)=> {
        return (
            <div className="cartContent" key={Productos.id}>
                <img src={Productos.img} alt="product-card"/>
                <h3 className="name">{Productos.name}</h3>
                <h4 className="price">{Productos.price}</h4>
                <h4 className="description">{Productos.description}</h4>

            </div>
        )

  }) 
    
}

export default CartElementos

import { useContext } from "react";
// la que continee el contexto
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acumulador, elemento) => acumulador + elemento.price, 0);
    return <div className='cartTotal'>
            <h3>Total a Pagar: {total} Bs</h3>
        </div>; 
};
export default CartTotal;
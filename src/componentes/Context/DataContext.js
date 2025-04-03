import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
// metemos data
export const dataContext = createContext();

const DataProvider = ({ children }) => {
    //hook 
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        // recorremos de todos los productos
        axios("data.json").then((res) => setData(res.data))
    },[])
    return(
        // para usar la data en cualquier componente
        <dataContext.Provider value={{data, cart, setCart }}>{children}{/* desde aca se repartira la informacion */}</dataContext.Provider>

    );
}
export default DataProvider;
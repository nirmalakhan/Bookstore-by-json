import React,{createContext,useState} from "react";

export const Context=createContext();

function BooksContext({children}){
    const[store,setStore]=useState([]);
    const[cart,setCart]=useState([]);
    const[price,setPrice]=useState(Number);

    return(
        <Context.Provider value={{store,setStore,cart,setCart,price,setPrice}}>
            {children}
        </Context.Provider>
    )
}

export default BooksContext;
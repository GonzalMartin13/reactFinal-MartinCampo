import React from "react";
import { Link } from "react-router-dom";
import { useContextoCarro } from "../../context/cartcontext";
import CartaCarro from "./card";


const Carrito = () => {
    const { carro } = useContextoCarro();

    if (carro === []) {
        return (
            <> <h1>El carrito de compras esta VACIO </h1>
            <Link to ="/index">Seguir Comprando</Link>
            </>
        );
    }

    return ( 
        <div>
            { carro.map(carrito => <CartaCarro prod={carrito}/>)}
        </div>
    )
}

export default Carrito; 
import React from "react";
import { useContextoCarro } from "../../context/cartcontext";

const CartaCarro = ({prod}) =>{
    const {borrarCarro} = useContextoCarro();
    return (
        <>
        <div key={prod.id}>
            <img src={prod.IMG} alt={prod.nombre} />
            <p>Nommbre: {prod.nombre}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio: {prod.precio}</p>
            <p><b>Subtotal: ${prod.candidad * prod.precio}</b></p>
            <button onClick={() => borrarCarro(prod.id)}> Borrar </button>
        </div>
        </>
    )
}

export default CartaCarro;
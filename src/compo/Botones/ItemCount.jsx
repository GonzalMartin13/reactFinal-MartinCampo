import React, { useState } from "react";



const ItemCount = ({stock, initial, onAdd}) => {
    let CantInit= initial;
    const [inicial, setInicial] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [carrito, setCarrito] = useState(onAdd);

    

    const Sumar = (valor1, valor2) => {
        if (valor2 === 0){
            return null;
        }
            setInicial(valor1 + 1);
            setItemStock(valor2 -1);
        
    }
    const Restar = (valor1, valor2) => {
        if (valor1 > 0 ) {
            setInicial(valor1 -1);
            setItemStock(valor2 +1);
        }
    }

    const ActualizaCompra = () => {
        setCarrito(inicial + carrito);
        setItemStock(itemStock);
        setInicial(CantInit);

    }

    return(
        <div className="text-center mt-3">
            <div>
                <button onClick={() => {Restar (inicial, itemStock)}}> - </button>
                <input type="text" value={inicial} className="text-center" />
                <button onClick={() => {Sumar(inicial, itemStock)}}> + </button>
            </div>
            <p>Cantidad disponible: {itemStock}</p>
            <button onClick={() => {ActualizaCompra()}} className="mt-2 Boton">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

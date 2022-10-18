import React from "react";
import ItemCount from "../Botones/ItemCount";

const ID = ({prods}) => {
    return(
        <div key={prods.id} className="col-md-4 m-2 py-3 row container-fluid">
            <div className="card">
                <img src={prods.img} className="card-img-top" alt={prods.nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{prods.nombre}</h5>
                    <p className="card-text text-center">{prods.descripcion} </p>
                    <p className="card-text text-center">Precio: $ {prods.precio} </p>
                </div>
            </div>
            <ItemCount stock={5} initial ={1} onAdd={0}/>
        </div>
    )
}

export default ID;
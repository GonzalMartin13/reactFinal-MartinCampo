import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../Botones/ItemCount";

const ID = ({prods}) => {
    return(
        <Link to={`/detail/${prods.id}`}>
            <div key={prods.id} className="justify-content-center m-2 py-3 row container-fluid">
                <div className="card">
                    <img src={prods.img} className="card-img-top mx-5 px-5" alt={prods.nombre} width="250px"gonza trolo/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{prods.nombre}</h5>
                        <p className="card-text text-center">{prods.descripcion} </p>
                        <p className="card-text text-center">Precio: $ {prods.precio} </p>
                    </div>
                </div>
                <ItemCount stock={prods.stock} initial ={1} onAdd={0}/>
            </div>
        </Link>
    )
}

export default ID;
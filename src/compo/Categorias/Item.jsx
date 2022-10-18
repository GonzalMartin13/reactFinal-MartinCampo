import React from "react";
//import ItemCount from "../Botones/ItemCount";

const Item = ({id, img, nombre, descripcion}) =>{
    return(
        <div key={id} className="col-md-4 m-2 py-3 row container-fluid">
            <div className="card">
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center">{descripcion} </p>
                </div>
            </div>
        </div>
    )
}

export default Item;
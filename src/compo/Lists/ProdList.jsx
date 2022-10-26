import React from "react";
import Item from "../Categorias/Item";



const IL = ({prods}) => {
    return(
        <div className="d-flex">
            {prods.map(items => <Item id={items.id} nombre={items.nombre} img={items.img} descripcion={items.subdesc} />)}
        </div>
    )
}

export default IL; 
import React from "react";
import ID from "../Categorias/ItemDetail";
import { useState, useEffect } from "react";

const PDC = () => {
    const productos = 
    [{"id" : "2" , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" },
    {"id" : 3 , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" }, 
    {"id" : 4 , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" }
    ];

    const [item, setItem] = useState({});

    useEffect (() => {
        const getProduct = () =>
            new Promise ((res, rej) =>{
                const producto = productos.find((prod) => prod.id === "2")
                setTimeout(() => {
                    res(producto)
                },2000)
            } )
            getProduct() 
            .then ((info) => {
                setItem(info)
            }) 
    }, [])

    return(
        <div className="row">
            <ID prods={item}/>
        </div>
    )
}

export default PDC; 
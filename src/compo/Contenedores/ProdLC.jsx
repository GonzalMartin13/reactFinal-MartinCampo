import React from "react";
//import { TraerListaFB } from "../../Hooks/FB";
import IL from "../Lists/ProdList";
import { useState, useEffect } from "react";


const PLC = () => {
    const productos = 
    [{"id" : 2 , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" },
    {"id" : 2 , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" }, 
    {"id" : 2 , "nombre" : "silla", "id" : "2" , "precio" : "500", "desc" : "asdjasd", "img" : "http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-4-fajas1-29ccbcfea17e0540d416003121656087-640-0.jpg" }
    ];

    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout (() => { 
                resolve(productos);
            }, 2000);
        });

    promesa.then ((respuesta) => {setItems(respuesta); console.log(respuesta);});
    }, []);

    

    return(
        <div>
            <IL prods={items}/>
        </div>
    );
}

export default PLC; 
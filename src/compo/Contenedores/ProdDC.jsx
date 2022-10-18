import React from "react";
import ID from "../Categorias/ItemDetail";
import { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const PDC = () => {

    const codigo = "RSHsK1Qdsw2sRKOk4L8D"; //Params
    const [item, setItem] = useState({});

    useEffect (() => {
        const db = getFirestore();
        const DocProds = doc(db, "Productos", codigo);
        getDoc (DocProds)
        .then (res => setItem({id: res.id, ...res.data()}));
    }, [])

    return(
        <div className="row">
            <ID prods={item}/>
        </div>
    )
}

export default PDC; 
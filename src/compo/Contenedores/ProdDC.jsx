import React from "react";
import ID from "../Categorias/ItemDetail";
import { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const PDC = () => {

    const {ID} = useParams();
    const [item, setItem] = useState({});

    useEffect (() => {
        const db = getFirestore();
        const DocProds = doc(db, "Productos", ID);
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
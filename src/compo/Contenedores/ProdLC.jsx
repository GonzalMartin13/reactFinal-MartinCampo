import React from "react";
//import { TraerListaFB } from "../../Hooks/FB";
import IL from "../Lists/ProdList";
import { useState, useEffect } from "react";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";


const PLC = () => {

    const [items, setItems] = useState([]);
    const Combo = "combo"; //UseParams
    const Cat = "prod"; //UseParams

    useEffect(() => {
        const db = getFirestore();
        const ColeccionProds = collection(db,"Productos");
        const ColecionCats = query(ColeccionProds, where("categoria", "==", Cat ));
        if (Cat) {
            getDocs(ColecionCats)
                .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))));
        } else {
            getDocs(ColeccionProds)
                .then(res => setItems( {id: res.id, ...res.data()}));
        };

    });
    

    return(
        <div>
            <IL prods={items}/>
        </div>
    );
}

export default PLC; 
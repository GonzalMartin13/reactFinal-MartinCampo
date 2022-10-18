import {getFirestore, doc, getDoc, collection, getDocs, query, where} from "firebase/firestore";


export const TraerProdFB = (id) => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "Productos", id);
    getDoc (queryDoc)
        .then (res => console.log({id: res.id, ...res.data()}));
};

export const TraerListaFB = (cat) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Productos");
    const queryCat = query(queryCollection, where("categoria", "==", cat));
    if (cat) {
        getDocs(queryCat)
            .then(res => console.log(res.docs.map(product => ({id: product.id, ...product.data()}))));
    } else {
        getDocs(queryCollection)
            .then(res => console.log( {id: res.id, ...res.data()}));
    };

}

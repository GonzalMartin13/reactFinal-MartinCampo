import React from "react";
import { Link } from "react-router-dom";





const Ingreso = () =>{
    
    return(
        <div>
            <div className="text-center mt-4">
                <h1>Bienvenidos a <b>La Tienda Del Mueble</b></h1>
            </div>
            <div className="row text-center">
                <div id="combo" className= "cuadroIngreso col-md-6 jsutify-content-center">
                    <h2>Conoce todos nuestos combos para cada habitacion</h2>
                    <Link to="/categoria/combo">
                        <button type="button" class=" boton btn btn-secondary"> Click Aqui</button>
                    </Link>
                </div>
                <div id="prod" className= "cuadroIngreso col-md-6 jsutify-content-center">
                    <h2>Conoce todos nuestros productos</h2>
                    <Link to="/categoria/prod">
                        <button type="button" class=" boton btn btn-secondary"> Click Aqui</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Ingreso;
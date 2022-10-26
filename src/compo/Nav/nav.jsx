import React from "react";
import Cart from "../CartWidget/cart";
import { Link } from "react-router-dom";


const Nav = () => {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav row">
        <div class="container-fluid col-11 mx-3" >
            <Link to="/home" class="navbar-brand" href="#">#LaTienda</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link active" aria-current="page" href="#">Inicio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/categoria/prod" class="nav-link" href="#">Productos</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/categoria/combo" class="nav-link" href="#">Combos</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Cart/>
    </nav>
    )
}

export default Nav;

import React from "react";
import Cart from "../CartWidget/cart";

const Nav = () => {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav row">
        <div class="container-fluid col-11 mx-3" >
            <a class="navbar-brand" href="#">#LaTienda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Combos</a>
                    </li>
                </ul>
            </div>
        </div>
        <Cart/>
    </nav>
    )
}

export default Nav;

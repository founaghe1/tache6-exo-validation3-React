import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import { FaBars } from 'react-icons/fa'


export const Navbar = () =>{
    return(
        <div>

            <nav class="navbar navbar-expand-lg fixed-top ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-flex justify-content-around w-100 px-md-5 text-center">
                        <li class="nav-item position-relative">
                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">ACCUEIL</a>
                        </li>
                        <li class="nav-item position-relative">
                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">PRESENTATION</a>
                        </li>
                        <li class="nav-item position-relative">
                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">PORTFOLIO</a>
                        </li>
                        <li class="nav-item position-relative">
                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">COMPETENCES</a>
                        </li>
                        <li class="nav-item position-relative">
                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">EXPERIENCES</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
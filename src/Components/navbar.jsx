import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav id="navbar" className="container my-1 bg-secondary-subtle p-3 rounded">
                <div className="row">
                    <div className="col">
                        <Link to={'/'}>
                            <img src="https://imgur.com/iez8lWH.jpg" className='d-flex justify-content-start rounded-circle' alt="Logo" width="100" />
                        </Link>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <ul className="nav p-2 bg-light rounded-pill">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link text-decoration-none text-dark'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/CalvinKlein" className='nav-link text-decoration-none text-dark' >Calvin Klein</a>
                            </li>
                            <li className="nav-item">
                                <a href="/TommyHilfiger" className='nav-link text-decoration-none text-dark' >Tommy Hilfiger</a>
                            </li>
                            <li className="nav-item">
                                <a href="/MediasTenis" className='nav-link text-decoration-none text-dark' >Medias Tenis</a>
                            </li>
                            <li className="nav-item">
                                <a href="/Mayorista" className='nav-link text-decoration-none text-dark' >Mayorista</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
    ;
};

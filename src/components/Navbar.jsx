import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
return (
<nav className='navIndex'>
    <h1 className="h1Nav"><Link to="/">Libre Ría</Link></h1>
    <ul>
        <NavLink className='links' to="/category/segundamano">Segunda mano</NavLink>
        <NavLink className='links' to="/category/nuevo">Nuevos</NavLink>
        <NavLink className='links' to="/checkout">Contacto</NavLink>
    </ul>
    <Link to="/Cart"><CartWidget /></Link>   
</nav>
);
};

export default Navbar;

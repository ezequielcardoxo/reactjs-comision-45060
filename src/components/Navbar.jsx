import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
return (
<nav className='navIndex'>
    <ul>
        <li>Categorias</li>
        <li>Contacto</li>
    </ul>
    <CartWidget />
</nav>
);
};

export default Navbar;

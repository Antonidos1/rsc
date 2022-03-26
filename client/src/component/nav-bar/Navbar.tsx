import { useContext } from "react";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
    const links = <>
        <li className="nav__item">
            <Link className="nav__link" to="/">
                <span> Home</span>
            </Link>
        </li>
        <li className="nav__item">
            <Link className="nav__link" to="/car">
                <span> Car table </span>
            </Link>
        </li>
        <li className="nav__item">
            <Link className="nav__link" to="/deal">
                <span> Deal table </span>
            </Link>
        </li>        
    </>

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                {links}
            </ul>
        </nav>
    )
}

export default NavBar
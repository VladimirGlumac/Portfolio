import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#f96d00",

    }

    return (
        <header style={{ zIndex: 50 }}>
            <Link className="site-logo" to="/">VG</Link>
            <div className={menuOpen ? "nav-open" : "nav"} >
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/work"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Work
                </NavLink>
                <NavLink
                    to="/contacts"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Contact me
                </NavLink>
            </div>
            <div className="mobile" onClick={toggleMenu}>
                {menuOpen ? <AiOutlineClose style={{ color: 'white', fontSize: 30 }} /> : <BiMenu style={{ color: 'white', fontSize: 30 }} />}
            </div>

        </header>
    )
}
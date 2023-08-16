import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header>
            <img src="/images/Logo.png" alt="Logo Kasa" />
            <nav className="nav-links">
                <Link to="/" className="nav-about">
                    Accueil
                </Link>
                <Link to="/about" className="nav-link">
                    À propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;

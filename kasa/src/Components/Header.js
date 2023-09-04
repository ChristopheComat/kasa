import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header() {
    const location = useLocation();

    return (
        <header>
            <img
                src="/images/Logo.png"
                alt="Logo Kasa"
                className="logo-desktop"
            />
            <img
                src="/images/Logo-mobile.png"
                alt="Logo Kasa"
                className="logo-mobile"
            />
            <nav className="nav-links">
                <Link
                    to="/"
                    className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    to="/about"
                    className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                    }`}
                >
                    À propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;

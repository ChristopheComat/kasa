import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
    return (
        <div className="page-error">
            <img src="/images/404.png" alt="Error" className="error-desktop" />
            <img
                src="/images/404-mobile.png"
                alt="Error"
                className="error-mobile"
            />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFound;

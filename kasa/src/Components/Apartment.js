import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/data.json";
import "./Apartment.scss";

function Apartment() {
    return (
        <div className="container">
            {data.map((apartment) => (
                <Link
                    to={`/fiche-logement/${apartment.id}`} // création d'un lien vers la fiche détaillée de l'appartement
                    key={apartment.id} // utilisation de l'ID comme clé unique pour chaque appartement
                    className="card"
                >
                    <img src={apartment.cover} alt={apartment.title} />
                    <h2>{apartment.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Apartment;

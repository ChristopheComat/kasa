import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/data.json";
import "./Apartment.scss";

function Apartment() {
    return (
        <div className="container">
            {data.map((apartment) => (
                <Link
                    to={`/fiche-logement/${apartment.id}`}
                    key={apartment.id}
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

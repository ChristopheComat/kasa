import React from "react";
import data from "../Data/data.json";
import "./Apartment.scss";

function Apartment() {
    return (
        <div className="container">
            {data.map((apartment) => (
                <div className="card" key={apartment.id}>
                    <img src={apartment.cover} alt={apartment.title} />
                    <h2>{apartment.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Apartment;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import "./InfosFiche.scss";

function InfosFiche({ apartment }) {
    // destructuration des données de l'appartement
    const { title, location, tags, host, rating } = apartment;

    // fonction pour générer la note d'étoiles
    const ratedStars = () => {
        const fullStars = Math.floor(rating);
        const remainingStars = 5 - fullStars;

        const stars = [];

        for (let i = 1; i <= fullStars; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faSolidStar} className="red" />
            );
        }

        for (let i = 1; i <= remainingStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={fullStars + i}
                    icon={faSolidStar}
                    className="grey"
                />
            );
        }

        return stars;
    };

    return (
        <div className="infos-container">
            <div className="part-one">
                <div className="infos-fiche">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <div key={index} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="part-two">
                <div className="host">
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name} />
                </div>
                <div className="rating">{ratedStars()}</div>{" "}
            </div>
        </div>
    );
}

export default InfosFiche;

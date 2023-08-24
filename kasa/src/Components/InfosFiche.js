import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import data from "../Data/data.json";
import "./InfosFiche.scss";

function InfosFiche() {
    const apartment = data[0];

    const { title, location, tags, host, rating } = apartment;

    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars === 0.5;

        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faSolidStar}
                        className="red"
                    />
                );
            } else if (i === fullStars + 1 && halfStar) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faSolidStar}
                        className="grey"
                    />
                );
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={faSolidStar} />);
            }
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
                <div className="rating">{renderStars()}</div>
            </div>
        </div>
    );
}

export default InfosFiche;

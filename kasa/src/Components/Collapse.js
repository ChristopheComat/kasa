import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, content }) {
    // utilisation de useState pour gérer l'état d'ouverture/fermeture du contenu
    const [isOpen, setIsOpen] = useState(false);

    // fonction pour basculer l'ouverture/fermeture du contenu
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div
                className={`collapse-header ${isOpen ? "radius" : ""}`}
                onClick={toggleCollapse} // l'action au clic pour basculer l'ouverture/fermeture
            >
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? "open" : ""}`}>
                    <FontAwesomeIcon icon={faChevronUp} />{" "}
                </span>
            </div>
            {isOpen && ( // affiche du contenu uniquement si isOpen est vrai
                <div className="collapse-content">
                    {Array.isArray(content) ? ( // vérifie si le contenu est un tableau
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li> // l'affiche chaque élément du tableau dans une liste
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p> // si le contenu n'est pas un tableau, affiche-le comme un paragraphe
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;

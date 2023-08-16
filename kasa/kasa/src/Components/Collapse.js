import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? "open" : ""}`}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
            </div>
            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );
}

export default Collapse;

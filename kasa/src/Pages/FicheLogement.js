import React from "react";
import Carrousel from "../Components/Carrousel";
import Collapse from "../Components/Collapse";

function FicheLogement() {
    return (
        <div>
            <Carrousel />
            <div className="collapses-containerInfo">
                <Collapse title="titre" content="description" />
                <Collapse title="titre" content="description" />{" "}
            </div>
        </div>
    );
}

export default FicheLogement;

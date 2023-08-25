import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../Components/Carrousel";
import Collapse from "../Components/Collapse";
import InfosFiche from "../Components/InfosFiche";
import data from "../Data/data.json";
import NotFound from "../Components/NotFound";

function FicheLogement() {
    const { id } = useParams();
    const currentApartment = data.find((apartment) => apartment.id === id);

    if (!currentApartment) {
        return <NotFound />;
    }

    return (
        <div>
            <Carrousel images={currentApartment.pictures} />
            <InfosFiche apartment={currentApartment} />
            <div className="collapses-containerInfo">
                <Collapse
                    title="Description"
                    content={currentApartment.description}
                />
                <Collapse
                    title="Équipements"
                    content={currentApartment.equipments}
                />
            </div>
        </div>
    );
}

export default FicheLogement;

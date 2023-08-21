import React from "react";
import BannerAbout from "../Components/BannerAbout";
import Collapse from "../Components/Collapse";

function About() {
    return (
        <div>
            <BannerAbout />
            <div className="collapses-container">
                <Collapse title="titre" content="description" />
                <Collapse title="titre" content="description" />
                <Collapse title="titre" content="description" />
                <Collapse title="titre" content="description" />
            </div>
        </div>
    );
}

export default About;

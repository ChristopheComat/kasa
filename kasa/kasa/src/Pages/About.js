import React from "react";
import Header from "../Components/Header";
import BannerAbout from "../Components/BannerAbout";
import Collapse from "../Components/Collapse";

function About() {
    return (
        <div>
            <Header />
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

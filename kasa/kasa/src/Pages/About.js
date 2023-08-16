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
                <Collapse title="fiabilité" content="/" />
                <Collapse title="respect" content="/" />
                <Collapse title="service" content="/" />
                <Collapse title="sécurité" content="/" />
            </div>
        </div>
    );
}

export default About;

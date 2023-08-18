import React, { useState } from "react";
import "./Carrousel.scss";

const images = ["image1.png", "image2.png", "image3.png"];

function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carrousel">
            <button className="arrow-button left" onClick={goToPrevSlide}>
                <img src="/images/arrow-left.png" alt="Left Arrow" />
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide"
            />
            <button className="arrow-button right" onClick={goToNextSlide}>
                <img src="/images/arrow-right.png" alt="Right Arrow" />
            </button>
        </div>
    );
}

export default Carrousel;

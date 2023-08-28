import React, { useState } from "react";
import "./Carrousel.scss";

function Carrousel({ images }) {
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
            <img
                src="/images/arrow-left.png"
                alt="flèche de gauche"
                className="arrow-button left"
                onClick={goToPrevSlide}
            />
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide"
            />
            <img
                src="/images/arrow-right.png"
                alt="flèche de droite"
                className="arrow-button right"
                onClick={goToNextSlide}
            />
        </div>
    );
}

export default Carrousel;

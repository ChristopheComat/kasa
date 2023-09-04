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

    // la condition pour vérifier s'il y a plus d'une image
    const showControls = images.length > 1;

    return (
        <div className="carrousel">
            {showControls && (
                <img
                    src="/images/arrow-left.png"
                    alt="flèche de gauche"
                    className="arrow-button left"
                    onClick={goToPrevSlide}
                />
            )}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide"
            />
            {showControls && (
                <img
                    src="/images/arrow-right.png"
                    alt="flèche de droite"
                    className="arrow-button right"
                    onClick={goToNextSlide}
                />
            )}
            {showControls && (
                <div className="slide-number">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
}

export default Carrousel;

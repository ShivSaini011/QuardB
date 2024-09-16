import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // We'll define the styles next.

const images = [
  './images/home1.png', // Replace with your actual image paths
  './images/home1.png',
  './images/home1.png'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 10 seconds (10000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000);
    return () => clearInterval(interval); // Clean up the interval
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="arrow left-arrow" onClick={goToPreviousSlide}>
            <img src="./images/arrow-left.png" alt="left-arrow" />
          {/* &#8249; */}
        </button>
        <button className="arrow right-arrow" onClick={goToNextSlide}>
        <img src="./images/arrow-right.png" alt="left-arrow" />
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

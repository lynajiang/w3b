import React, { useState } from 'react';
import './ImageGallery.css'; // Import the CSS file for styling

const importAll = (r) => r.keys().map(r);

const images = importAll(require.context('../../assets/images/poloroids', false, /\.(png|jpe?g|svg)$/));

const ImageGallery = ({path}) => {
  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleFlip = (index) => {
    setFlippedIndices((prev) => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`image-item ${flippedIndices.includes(index) ? 'flipped' : ''}`} 
          onClick={() => handleFlip(index)}
        >
          <div className="image-item-inner">
            <div className="image-item-front">
              <img src={image} alt={`img-${index}`} />
            </div>
            <div className="image-item-back">
              <h3>Image Details</h3>
              <p>This is a description for image {index + 1}.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
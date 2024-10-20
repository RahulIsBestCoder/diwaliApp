import React from 'react';
import './ImageBox.css'; // Import the CSS file for styling

const ImageBox = ({ src, alt , size }) => {
  console.log(`image-box-${size}`);
  
  return (
    <div className={`image-box-${size}`}>
      <img src={src} alt={alt} id='picture' />
    </div>
  );
};

export default ImageBox;
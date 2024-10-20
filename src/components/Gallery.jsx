import React from 'react';
import ImageBox from './ImageBox';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Festive Moments</h2>
      <div className="image-grid">
      <ImageBox src="diya1.jpg" alt="Diya" size='middium'/>
      <ImageBox src="fireworks.jpg" alt="Fireworks" size='middium'/>
      <ImageBox  src="rangoli.jpg" alt="Rangoli" size='middium'/>
      </div>
    </section>
  );
}

export default Gallery;

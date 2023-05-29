import React from 'react';

const ImageGrid = () => {
  const images = [
    { id: 1, title: 'Boatbuilding', url: '/images/boat.JPG' },
    { id: 2, title: 'Traffic-Cone Sneaker', url: '/images/shoes.JPG' },
    { id: 3, title: 'Apparel Design', url: '/images/jacket.png' },
    { id: 4, title: 'Wardrobe', url: '/images/wardrobe.jpg' },
    { id: 5, title: 'Emergent Architecture', url: '/images/emergent.png' },
    { id: 6, title: 'Monastery Library', url: '/images/library.jpg' },
    { id: 7, title: 'Magnetic Boxes', url: '/images/boxes.jpg' },
    { id: 8, title: 'Instruments', url: '/images/lyre.jpg' },
    { id: 9, title: 'Norden House', url: '/images/norden.png' }
  ];

  return (
    <div id="image-grid" className="image-grid">
      {images.map((image) => (
        <a key={image.id} href={`/image/${image.id}`}>
          <div className="image-tile">
            <img src={image.url} alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;

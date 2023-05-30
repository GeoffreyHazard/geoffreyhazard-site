import React from 'react';

const ImageGrid = () => {
  const images = [
    { id: "boat", title: 'Boatbuilding', url: '/images/boat.JPG' },
    { id: "shoes", title: 'Traffic-Cone Sneaker', url: '/images/shoes.JPG' },
    { id: "jacket", title: 'Apparel Design', url: '/images/jacket.png' },
    { id: "wardrobe", title: 'Wardrobe', url: '/images/wardrobe.jpg' },
    { id: "emergent", title: 'Emergent Architecture', url: '/images/emergent.png' },
    { id: "library", title: 'Monastery Library', url: '/images/library.jpg' },
    { id: "boxes", title: 'Magnetic Boxes', url: '/images/boxes.jpg' },
    { id: "lyre", title: 'Instruments', url: '/images/lyre.jpg' },
    { id: "norden", title: 'Norden House', url: '/images/norden.png' }
  ];

  return (
    <div id="image-grid" className="image-grid">
      {images.map((image) => (
        <a key={image.id} href={`/${image.id}`}>
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

import React from 'react';
import ImageSmall from '../ImageSmall';

export default function ChoresImages({ choreImages, deleteImage, onUpdate }) {
  const myImages = () => choreImages.map((img, i) => (<ImageSmall deleteImage={deleteImage} imageOrdinal={i} onUpdate={onUpdate} key={`${img}-${img.id}`} imageId={img.id} image={img.image} />));

  return (
        <div className="d-flex">
        { choreImages && myImages() }
        </div>
  );
}

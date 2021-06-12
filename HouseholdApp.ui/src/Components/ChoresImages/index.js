import React from 'react';
import ImageSmall from '../ImageSmall';

export default function ChoresImages({ choreImages, deleteImage, onUpdate }) {
  const myImages = () => choreImages.map((img, index) => (<ImageSmall deleteImage={deleteImage} onUpdate={onUpdate} key={`${img}-${img.id}-${index}`} imageId={img.id} image={img.image} />));

  return (
        <div className="d-flex">
            These are my chore images:
        { choreImages && myImages() }
        </div>
  );
}

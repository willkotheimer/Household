import React from 'react';
import ImageSmall from '../ImageSmall';

export default function ChoresImages({ choreImages, deleteImage, onUpdate }) {
  const myImages = () => choreImages.map((img) => (<ImageSmall deleteImage={deleteImage} onUpdate={onUpdate} key={`${img}-${img.id}`} imageId={img.id} image={img.image} />));

  return (
        <div className="d-flex">
        { choreImages && myImages() }
        </div>
  );
}

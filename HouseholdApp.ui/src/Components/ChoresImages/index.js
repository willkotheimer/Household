import React from 'react';
import ImageSmall from '../ImageSmall';

export default function ChoresImages({ choreImages }) {
  const myImages = () => choreImages.map((img) => (<ImageSmall key={img} image={img.image} />));
  return (
        <div className="d-flex">
            These are my chore images:
            { choreImages && myImages() }
        </div>
  );
}

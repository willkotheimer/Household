import React from 'react';
import AppModal from '../AppModal';
import DeleteImage from '../Forms/DeleteImage';

export default function Image({
  image,
  imageId,
  deleteImage,
  imageOrdinal,
  onUpdate,
}) {
  return (
      <span key={`${image}-outer`} className="smallFrame">
              {imageOrdinal && (<span className="number">{imageOrdinal + 1}</span>) } <img key={`${image}-img`} className="smallImage" src={image} alt="" />
              { deleteImage && (<AppModal deletePosition="deletePosition" deleteImage={deleteImage} onUpdate={onUpdate} title={'delete'} buttonLabel={'X'}>
               <DeleteImage imageId={imageId} image={image} deleteImage={deleteImage} onUpdate={onUpdate} />
            </AppModal>) }
      </span>
  );
}

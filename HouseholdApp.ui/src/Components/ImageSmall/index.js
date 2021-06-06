import React from 'react';

export default function Image({ image }) {
  return (
      <span key={`${image}-outer`} className="smallFrame">
          <span key={`${image}-inner`} className="smallImageHolder">
              <img key={`${image}-img`} className="smallImage" src={image} alt="image" />
          </span>
      </span>
  );
}

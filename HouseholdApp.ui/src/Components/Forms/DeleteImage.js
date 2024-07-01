import React from 'react';
import Image from '../../helpers/data/imageData';

export default class DeleteImage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.warn(this.props.imageId, this.props.image);
    Image.deleteImage(this.props.imageId, this.props.image).then((resp) => {
      this.props.onUpdate();
      this.props.toggle();
    });
  };

  render() {
    return (
      <div onClick={this.handleSubmit}>
        Are you sure you want to delete this image?
        <button onClick={(e) => this.handleClick}>Delete</button>
      </div>
    );
  }
}

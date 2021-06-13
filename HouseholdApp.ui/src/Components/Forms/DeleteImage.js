import React from 'react';
import Image from '../../helpers/data/imageData';

export default class DeleteImage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    Image.deleteImage(this.props.imageId, this.props.image).then((resp) => {
      this.props.onUpdate();
      this.props.toggle();
      console.warn(resp);
    });
  };

  render() {
    return (
      <div onClick={this.handleSubmit}>
        <h3 className="deleteImage"></h3>
        Are you sure you want to delete this image?
        <button onClick={(e) => this.handleClick}>Delete</button>
      </div>
    );
  }
}
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  Button, Form,
} from 'reactstrap';
import ImageUploader from 'react-images-upload';
import Img from '../../helpers/data/imageData';

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ChoreId: this.props.choreInfo.id,
      Active: 1,
      FormImages: [],
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    const storage = getStorage();
    picture.forEach((pic) => {
      const storageRef = ref(storage, `household-app/${this.state.ChoreId}/${Date.now()}${pic.name}`);
      uploadBytes(storageRef, pic).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((img_url) => {
          this.setState({ FormImages: [...this.state.FormImages, img_url] });
        });
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.FormImages.forEach((image) => {
      const makeImageObject = {
        ChoreId: this.state.ChoreId,
        Active: this.state.Active,
        Image: image,
      };
      Img.addImage(makeImageObject).then(() => {
        this.props.onUpdate();
      });
    });
    this.props.toggle();
  }

  render() {
    return (
        <>
            <div className='assignment-form'>
            <Form style= {{ width: '75%' }} onSubmit={(e) => this.handleSubmit(e)}>
               <ImageUploader
                   withIcon={true}
                   withPreview={true}
                   buttonText='Choose images'
                   onChange={this.onDrop}
                   imgExtension={['.jpg', '.gif', '.png', '.gif']}
                   maxFileSize={10485760}
                   fileSizeError={'file size is too big'}
               />
               <Button className='mt-3'>Submit</Button>
           </Form>
        </div>
       </>
    );
  }
}

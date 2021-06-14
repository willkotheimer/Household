/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
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
    picture.forEach((pic) => {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`household-app/${this.state.ChoreId}/${Date.now()}${pic.name}`);
      imageRef.put(pic).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((img_url) => {
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
      console.warn(makeImageObject);
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
                   buttonText='Choose images'
                   onChange={this.onDrop}
                   imgExtension={['.jpg', '.gif', '.png', '.gif']}
                   maxFileSize={5242880}
               />
               <Button className='mt-3'>Submit</Button>
           </Form>
        </div>
       </>
    );
  }
}

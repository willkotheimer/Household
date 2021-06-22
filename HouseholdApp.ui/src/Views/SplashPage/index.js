import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Images from '../../helpers/data/imageData';
import Auth from '../../Components/Auth';

export default function SplashPage(props) {
  const [picArray, setPicArray] = useState();
  const getImages = () => Images.getImages();
  useEffect(() => {
    Images.getImages().then((images) => {
      setPicArray(images);
    });
  }, [getImages]);

  return (
    <Container className="splash">
      <Row>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[0].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[1].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[2].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[3].image} />}</Col>
      </Row>
      <Row>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[4].image} />}</Col>
        <Col className="splash-title col-6"><div>
          <h5>HOUSEHOLD</h5><div><Auth /></div></div>
        </Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[5].image} />}</Col>
      </Row>
      <Row>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[6].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[7].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[8].image} />}</Col>
        <Col className="col-3">{picArray && <img alt='organized house' src={picArray[9].image} />}</Col>
      </Row>

    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Images from '../../helpers/data/imageData';

export default function SplashPage(props) {
  const [picArray, setPicArray] = useState();

  useEffect(() => {
    Images.getImages().then((images) => {
      setPicArray(images);
    });
  }, []);

  return (
    <Container className="splash">
      <Row>
        <Col className="col-3">{picArray && <img src={picArray[0].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[1].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[2].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[3].image} />}</Col>
      </Row>
      <Row>
        <Col className="col-3">{picArray && <img src={picArray[4].image} />}</Col>
        <Col className="splash-title col-6"><div>
          <h5>HOUSEHOLD</h5><div><button>Check Your Chores</button></div></div>
        </Col>
        <Col className="col-3">{picArray && <img src={picArray[5].image} />}</Col>
      </Row>
      <Row>
        <Col className="col-3">{picArray && <img src={picArray[6].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[7].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[8].image} />}</Col>
        <Col className="col-3">{picArray && <img src={picArray[9].image} />}</Col>
      </Row>

    </Container>
  );
}

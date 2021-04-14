import React from 'react';
import { Card, CardDeck, Button, Row, Col } from 'react-bootstrap';
import './Translators.scss';

const Translators = () => {
  return (
    <Row sm="1" md="2" lg="3">
      <Col className="test3">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Addison_1.png" />
          <Card.Body>
            <Card.Title>Addison</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className="test3">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Lumist.png" />
          <Card.Body>
            <Card.Title>Lumist</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className="test3">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Rita_2.png" />
          <Card.Body>
            <Card.Title>Rita</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>

      <Col className="test3">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Sang.png" />
          <Card.Body>
            <Card.Title>Sang</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className="test3">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Traffy_2.png" />
          <Card.Body>
            <Card.Title>Traffy</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default Translators;

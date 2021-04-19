import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './owners.scss';

function Owners() {
  return (
    <Row sm="1" md="2" lg="3">
      <Col className="test-1">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Anne.jpg" className="test1-img" />
          <Card.Body>
            <Card.Title>Anne</Card.Title>
            <Card.Text>Founder</Card.Text>
            <Card.Text></Card.Text>
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
      <Col className="test1">
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src="Ash.jpg" className="test1-img" />
          <Card.Body>
            <Card.Title>Ashlyn Rose</Card.Title>
            <Card.Text>Managing Director</Card.Text>
            <Card.Text></Card.Text>
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
}

export default Owners;

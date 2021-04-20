import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './owners.scss';

function Owners() {
  return (
    <Row sm='1' md='2' lg='3'>
      <Col className='test-1'>
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src='Anne.jpg' className='test1-img' />
          <Card.Body>
            <Card.Title>Anne</Card.Title>
            <Card.Text>Founder</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test1'>
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src='Ash.jpg' className='test1-img' />
          <Card.Body>
            <Card.Title>Ashlyn Rose</Card.Title>
            <Card.Text>Cofounder and Managing Director</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test'>
        <Card style={{ marginTop: '10%' }}>
          <Card.Img src='Bhrugu.jpg' />
          <Card.Body>
            <Card.Title>Bhrugu Sharma</Card.Title>
            <Card.Text>CoFounder, UI-UX & Backend Developer</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test'>
        <Card>
          <Card.Img src='s4vvy-min.jpg' />
          <Card.Body>
            <Card.Title>Saheel Sapovadia</Card.Title>
            <Card.Text>
              Co-Founder & Full stack Developer (MERN expert)
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test'>
        <Card>
          <Card.Img src='gaurav.jpg' />
          <Card.Body>
            <Card.Title>Gaurav Suthar</Card.Title>
            <Card.Text>Frontend Developer </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
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

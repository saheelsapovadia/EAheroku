import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LoadingNovelPage.scss';
export default class LoadingNovelPage extends Component {
  render() {
    return (
      <Container className='loading-novelpage'>
        <h3 className='title'></h3>
        <Container>
          <Row>
            <Col sm={4}>
              <div className='image'></div>
            </Col>
            <Col sm={8}>
              <Row style={{ marginTop: '20px' }}>
                <Col sm={4}>
                  <div className='mn'></div>
                </Col>
                <Col sm={8}>
                  <div className='lrg'></div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className='mn'></div>
                </Col>
                <Col sm={8}>
                  <div className='lrg'></div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className='mn'></div>
                </Col>
                <Col sm={8}>
                  <div className='lrg'></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className='summary'>
          <h3 className='summary-title'></h3>
          <p className='text'></p>
          <p className='text'></p>
          <p className='text'></p>
          <p className='text'></p>
        </div>
      </Container>
    );
  }
}

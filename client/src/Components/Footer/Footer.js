import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Col, Row } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
class Footer extends Component {
  render() {
    return (
      <Jumbotron className='mb-0 pb-0'>
        <h2 className='text-center'>Euphoria Airline TLs</h2>
        <Container>
          <Row>
            <Col sm>
              <img src='EA-Logo.png' class='img-fluid' alt='Responsive '></img>
            </Col>
            <Col sm>
              Overview
              <ul style={{ listStyle: 'none' }}>
                <li>Library</li>
                <li>Completed</li>
                <li>Ongoing</li>
                <li>Dropped</li>
              </ul>
            </Col>
            <Col sm>
              Community
              <ul style={{ listStyle: 'none' }}>
                <li>Staff</li>
                <li>Forum</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </Col>
            <Col sm>
              <img
                src='DiscordFullLogo.png'
                class='img-fluid'
                alt='Responsive '
              ></img>
              <Row className='my-5 '>
                <Col>
                  <FaInstagram />
                </Col>
                <Col>
                  <FaFacebook />
                </Col>
                <Col>
                  <FaTwitter />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Footer;

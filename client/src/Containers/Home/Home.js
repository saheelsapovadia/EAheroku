import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Top from '../../Components/Home/Top';
import Carousel from '../../Components/Home/Carousel';
import Latest from '../../Components/Home/Latest/Latest';
import SupportUs from '../../Components/Home/supportus';
import { Container } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Aux>
        <Container>
          <Carousel></Carousel>
          <main></main>
          <Top></Top>
          <Latest></Latest>
          <SupportUs />
        </Container>
      </Aux>
    );
  }
}

export default Home;

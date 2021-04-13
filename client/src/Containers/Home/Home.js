import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Top from '../../Components/Home/Top';
import Carousel from '../../Components/Home/Carousel/Carousel';
import Latest from '../../Components/Home/Latest/Latest';
import SupportUs from '../../Components/Home/supportus';
import { Container } from 'react-bootstrap';
import './Home.css';
import TitleComponent from '../../utils/TitleComponent';
class Home extends Component {
  render() {
    return (
      <Aux>
        <TitleComponent title='EA'></TitleComponent>
        <Container className='set-padding'>
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

// style={{ backgroundColor: '#7687A1' }}

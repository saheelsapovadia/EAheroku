import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Developer from '../../Components/Tab/Developer/Developer';
import Translators from '../../Components/Tab/Translators/Translators';
import Owners from '../../Components/Tab/Owners/Owners';

const Aboutus = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="Developers" id="uncontrolled-tab-example">
        <Tab eventKey="Developers" title="Developers">
          <Developer />
        </Tab>
        <Tab eventKey="Owners" title="Owners">
          <Owners />
        </Tab>

        <Tab eventKey="Translators" title="Translators">
          <Translators />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Aboutus;

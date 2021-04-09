import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Developer from '../../Components/Tab/Developer/Developer';
import Editor from '../../Components/Tab/Editor/Editor';
import Translators from '../../Components/Tab/Translators/Translators';
import ProofReaders from '../../Components/Tab/Proof_readers/Proof_readers';
import QualityCheckers from '../../Components/Tab/Quality_checkers/Quality_checkers';
const Aboutus = () => {
  return (
    <Container>
      <Tabs defaultActiveKey='Translators' id='uncontrolled-tab-example'>
        <Tab eventKey='Translators' title='Translators'>
          <Translators />
        </Tab>
        <Tab eventKey='Editors' title='Editors'>
          <Editor />
        </Tab>

        <Tab eventKey='proof_readers' title='Proof Readers'>
          <ProofReaders />
        </Tab>

        <Tab eventKey='quality_check' title='Quality Check'>
          <QualityCheckers />
        </Tab>
        <Tab eventKey='Developers' title='Developers'>
          <Developer />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Aboutus;

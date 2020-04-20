import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from  './components/Menu';
import Viewer from './components/Viewer';

function App() {
  return (
    <Container className='m-0 p-0'>
  <Row className="m-0">
    <Col lg={3} className='p-0 shadow'><Menu/></Col>
    <Col lg={9} className='p-0'><Viewer/></Col>
  </Row>
</Container>
  );
}



export default App;

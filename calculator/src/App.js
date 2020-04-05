import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Calculator from './components/Calculator'


function App() {
  return (

    <Container fluid >
    <Row>
    <Col style={{marginTop:"20px"}} md={{ span: 4, offset: 4 }}>
      <Calculator />
      </Col>
      </Row>
    </Container>
  );
}

export default App;

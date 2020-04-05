import React, { Component } from 'react'
import SimpleList from './components/SimpleList'
import ListItems from './components/ListItems'
import DropDown from './components/DropDown'
import SimpleDropDown from './components/SimpleDropDown'
import {Container, Row, Col} from 'react-bootstrap'




let daysOfWeek = ['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday']
export class App extends Component {
  render() {
    return (
      <Container fluid >
      <Row>
      <Col style={{marginTop:"20px"}} md={{ span: 4, offset: 4 }}>
        {/* <SimpleList /> */}
        {/* <ListItems /> */}
        {/* <DropDown /> */}
        <SimpleDropDown days={daysOfWeek} />
        </Col>
        </Row>
      </Container>
    )
  }
}

export default App

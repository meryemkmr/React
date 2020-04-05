import React, { Component } from 'react'
import People from './components/People'
import Child from './components/Child'

export class App extends Component {
  constructor(props) {
    super(props)
    
  }




  render() {
    let people = ['Matt', 'Eric', 'Tracy', 'Skylar', 'Melissa', 'Keith']
    return (
      <>
        <Child />
    
        {/* <div>
            <People people = {people}/>
        </div> */}
      </>
    )
  }
}

export default App

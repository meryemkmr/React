import React, { Component } from 'react'
import Parent from './components/Parent'

export class App extends Component {
  render() {
    return (
      <div style = {{backgroundColor:"purple", textAlign:"center", justifyContent:"center",color:"#ffffff", padding: "10px"}}>
        Our App
        <br />
        <Parent />
      </div>
    )
  }
}

export default App

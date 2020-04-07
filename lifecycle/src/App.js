import React, { Component } from 'react';
import Child from './Child'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isLoaded: false,
      items: []
    }
    console.log("i'm a constructor");
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidMount() {
    console.log("component did mount");
    fetch("https://corona.lmao.ninja/states")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 0)

    handleClick = ()=>{

    }



  }
  render() {
    console.log("rendered component");
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          {/* Lifecycle Methods <br />
        <Child test={4} /> */}
        Loaded Data

          <button>click me</button>

          {/* <ul>
            {
              this.state.items.map((item, index) => {
                return <li key={index}>{item.state} | {item.cases}</li>
              })
            }
          </ul> */}
        </>
      )
    }
  }
}
export default App
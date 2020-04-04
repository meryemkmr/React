import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    render() {
        return (
            <div style = {{backgroundColor:"blue", textAlign:"center", justifyContent:"center",color:"#ffffff", padding: "10px"}}>
                Parent
                <Child />
            </div>
        )
    }
}

export default Parent

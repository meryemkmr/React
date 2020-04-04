import React, { Component } from 'react'
import Grandchild from './Grandchild'

export class Child extends Component {
    render() {
        return (
            <div style = {{backgroundColor:"green", textAlign:"center", justifyContent:"center",color:"#ffffff", padding: "10px"}}>
                Child
                <Grandchild />
            </div>
        )
    }
}

export default Child

import React, { Component } from 'react'

export class Grandchild extends Component {
    render() {
        return (
            <div style = {{backgroundColor:"yellow", textAlign:"center", justifyContent:"center",color:"#ffffff", padding: "10px"}}>
                Grandchild
            </div>
        )
    }
}

export default Grandchild

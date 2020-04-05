import React, { Component } from 'react'


export class People extends Component {

    render() {
        return (
            <div>
                <ul>
                {
                    this.props.people.map((person,index) =>{
                        return <li key={index}>{person}</li>
                    })
                }
            </ul>
            </div>
        )
    }
}

export default People

import React, { Component } from 'react'

export class SimpleList extends Component {
    render() {
        let days = ['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday']
        let listOfDays = days.map((day,index) => {
            return <li key={index}>{day}<br /></li>

            
        })
        
        return (
            <ul>
                {listOfDays}
            </ul>
        )
    }
}

export default SimpleList

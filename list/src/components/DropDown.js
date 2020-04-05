import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

export class DropDown extends Component {
    render() {
        let days = ['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday']
        let daysOfWeek = days.map((day,index)=>{
            return <Dropdown.Item key={index}>{day}</Dropdown.Item>
        })

        return (
            <Dropdown style={{marginTop:"20px"}}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Days of Week
                </Dropdown.Toggle>
                <Dropdown.Menu>
                
                {daysOfWeek}
            </Dropdown.Menu>


            </Dropdown>
        )
    }
}

export default DropDown

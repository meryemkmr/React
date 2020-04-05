import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ListItems extends Component {
    render() {
        let peoples = ['Matt', 'Eric', 'Tracy', 'Skylar', 'Melissa', 'Keith']
        let peopleList = peoples.map((people,index)=>{
            return <ListGroup.Item  key = {index}>{people}</ListGroup.Item>
        })

        return (
            <ListGroup className="justify-content-md-center">
               {peopleList} 
            </ListGroup>
        )
    }
}

export default ListItems

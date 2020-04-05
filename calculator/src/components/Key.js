import React, { Component } from 'react'
import './styles.css'

export class Key extends Component {
    constructor(props) {
        
        super(props)
    }

    



    render() {
        return (
            ! this.props.zero ?
            <div className={this.props.bgc ? "keypad specialKey": "keypad"}>
                {this.props.num}
            </div>
            :
            <div className={"zero keypad"}>
                {this.props.num}
            </div>
        )
    }
}

export default Key

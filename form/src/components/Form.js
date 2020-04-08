import React, { Component } from 'react'
import './App.css'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state ={

        }
        
    }
    render() {
        return (
            <div className = 'to-do'>
                <form>
                    <input type='text'/>
                    <br />
                    <input type ='checkbox' />
                </form>
            </div>
        )
    }
}

export default Form

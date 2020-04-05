import React, { Component } from 'react'

export class SimpleDropDown extends Component {
    constructor(props) {
        super(props)   
    }
    optionList = () => {

        // 3. way of rendering days
        return this.props.days.map((day,index)=>{
            return <option key ={index}>{day}</option>
        })
        
        //2. way of rendering days
        // let dayList = this.props.days.map((day,index)=>{
        //     return <option key ={index}>{day}</option>
        // })
        // return dayList
    }
    
    render() {

        // 1. way of rendering days


        // console.log(this.props.days)
        // let optionList = this.props.days.map((day,index)=>{
        //     return <option key ={index}> {day}</option>
        // })
        return (
            <select>
               {/* {optionList} */}
               {this.optionList()}
            </select>
        )
    }
}

export default SimpleDropDown

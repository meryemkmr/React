import React from 'react';
import PropTypes from 'prop-types';

class Handleclick extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            txt: "Hello React",
            num1: 3,
            num2:4,
            num:[]
        }
        
    }
    handleUpdate = () => {
        // console.log("button was cliked")
        this.setState({
            txt:"This is first handle.",
            num1: this.state.num1 + 1,
            num2: this.state.num2 -1  
        })
    }
    

    render() {
        return (
            <> 
            
            <h1>{this.state.txt}</h1>
            <h2>{this.state.num1} + {this.state.num2} = {this.state.num1 + this.state.num2}</h2> <br />
            <button onClick={this.handleUpdate}>Clik me</button>

            
            </>
        );
    }
}




export default Handleclick

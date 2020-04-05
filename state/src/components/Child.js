import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props); 
        
        

        this.state ={
            txt:"Hello React",
            num1: 3,
            num2: 4
        }
    }
    

    render() {
        return (
            <>
              {this.state.txt}  <br />
              {this.state.num1 + this.state.num2}  
            </>
        );
    }
}


// Child.propTypes = {
//     txt: PropTypes.string,
//     integer: PropTypes.number
    
// };

export default Child

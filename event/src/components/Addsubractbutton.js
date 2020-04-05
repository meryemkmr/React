import React from 'react';
import PropTypes from 'prop-types';

class Addsubractbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            num:0
        }
        
    }
    addNum = () => {
        this.setState({
           num: this.state.num +1
        })
    }
    subNum = () => {
        this.setState({
            num:this.state.num -1
        })
    }
    
    

    render() {
        return (
            <>
                <h1 style={{justifyContent:"center",textAlign:"center",display:"flex",flexDirection:"column"}}>{this.state.num}</h1>
                <div style={{justifyContent:"center",textAlign:"center",display:"flex",flexDirection:"row", padding: "30px",}}>
                <button onClick = {this.addNum} > + </button>
                <button onClick = {this.subNum} > - </button>
                </div>
            </>

        );
    }
}




export default Addsubractbutton

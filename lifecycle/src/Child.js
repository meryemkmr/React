import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            increasing: false
        }
        
    }

    componentWillReceiveProps(nextProps){
        console.log("will receive props")

        console.log(`${this.props.test}`)

        console.log(`${nextProps.test}`)

        let incresing = nextProps.test > this.props.test;

        this.setState({
            incresing:incresing
        },()=>{
            console.log('state of increasing:',this.state.increasing);
        }
          
        )

    }



    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.val > 5)



    }

    render() {
        return (
            <> 
            
            Child<br />
            {this.props.val}
            </>
        );
    }
}




export default Child

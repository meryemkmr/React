import React from 'react';
import { Pie } from "react-chartjs-2";


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <Pie

          data={this.props.state}
          options={{
            title:{
              display:true,
              text:'Coronavirus cases by state',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        
        
        
        
         />


      </div>
      
    );
  }
}


export default App

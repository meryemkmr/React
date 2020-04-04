import React from 'react';

import Virus from './components/Virus'
import data from './data/virus'

function App() {

let dataSet = data.map((cdcData,index)=>{

  return <Virus key= {index} virus= {cdcData.virus} country={cdcData.country} numViruses= {cdcData.numViruses} numDeaths= {cdcData.numDeaths}/>

})
  // before JSX return
  return (
    <div className ="row" style ={{padding:"30px", color:"blue", justifyContent: "center",textAlign: "center" }}>

      {dataSet}

    
    {/* <Virus virus= {data[0].virus}
        country= {data[0].country}
        numViruses= {data[0].numViruses}
        numDeaths= {data[0].numDeaths} />
    <Virus virus= {data[2].virus}
        country= {data[2].country}
        numViruses= {data[2].numViruses}
        numDeaths= {data[2].numDeaths} />
    <Virus virus= {data[3].virus}
        country= {data[3].country}
        numViruses= {data[3].numViruses}
        numDeaths= {data[3].numDeaths} />
    <Virus virus= {data[4].virus}
        country= {data[4].country}
        numViruses= {data[4].numViruses}
        numDeaths= {data[4].numDeaths} /> */}
    
  </div>
  );
}

export default App;

import React from 'react'
import moduleName from '../data/virus'

const Virus = (props) => {
  return (
    <>
      <h2>{props.virus}</h2> <br/>
      <h2>{props.country}</h2><br/>
      <h2>{props.numViruses}</h2> <br/>
      <h2>{props.numDeaths}</h2><hr/>
      
    </>
  )
}

export default Virus

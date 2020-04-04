import React from 'react';

import './App.css';

function App(props) {
  return (
    <div >
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src="http://lorempixel.com/400/400/nature/" />
                </div>
                <div className="card-content">
                    <p>{props.name}</p>
                    <p>{props.city}</p>
                   
                    {/* <p>{corona}</p>
                    <p>{masks}</p> */}
                </div>
                <div className="card-action">
                    <a href="#"> ${props.price}</a>
                    {/* <a href="#">${isMarkup() ? 9.99 : 59.99}</a> */}
                </div>
            </div>
        </div>	
    </div>
  )
}

export default App;

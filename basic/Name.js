//create component 
// return JSX h1 tag your name and your h2 city
//h1 tag = name
// h2 tag for city
// import component into main html file (basicReact.html)
// display component


function Name() {

    return(<div className="row">
        <div className="col s2">
            <div className="card hoverable small">
                {/* <div className="card-image">
                    <img src="http://lorempixel.com/400/400/nature/" />
                </div> */}
                {/* <div className="card-content"> */}
                    <h1>{name}</h1>
                    <h2>{city}</h2>
                {/* </div> */}
                {/* <div className="card-action">
                    <a href="#">${isMarkup() ? 9.99 : 59.99}</a>
                </div> */}
            </div>
        </div>	
    </div>)
    
}
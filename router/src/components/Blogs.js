import React from 'react'

function Blogs(props) {
    return (
        <div>
            Blogs
      <br />
      {props.match.params.blogID} 
        </div>
    )
}

export default Blogs

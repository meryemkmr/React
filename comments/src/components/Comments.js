import React, { Component } from 'react'
import data from './commentData'
import Comment from './Comment'

export class Comments extends Component {
    render() {
        return (
            
            <>
            {data.comments.map(comment=>{
                return(
                    <Comment
                     name={comment.name}
                     description= {comment.description}
                     img = {comment.img}
                     responses = {comment.responses}
                     id ={comment.id}
                     /> 
                )
            })}
               
            </>
        )
    }
}

export default Comments

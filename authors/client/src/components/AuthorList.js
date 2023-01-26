import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const AuthorList = (props) => {
    const {removeFromDom} = props;

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/deleteproduct/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            {props.authors.map( (author) =>
                <div key={author._id}>
                <p>{author.name}</p>
                <Link to={"/api/updateauthor/" + author._id}>Update</Link>
                |
                <button onClick={(e)=>deleteAuthor(author._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
    
export default AuthorList;
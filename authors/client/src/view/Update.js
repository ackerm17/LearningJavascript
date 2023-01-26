import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Update = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=> {
                setName(res.data.name);
            })
    },[id])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateauthor/' + id, {
            name
        })
            .then((res)=> {console.log(res); navigate('/')})
            .catch((err)=>{console.log(err);
            setErrors(err.response.data.errors)})
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/'}>Home</Link>
            <p>Edit this Author</p>
            <form onSubmit={updateAuthor}>
                <label>Author Name</label>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                {
                    errors?.name && (<span>
                        {errors?.name?.message}
                    </span>)
                }
                <input type="submit"></input>
                <Link to={'/'}>Cancel</Link>
            </form>
        </div>
    )
}

export default Update;
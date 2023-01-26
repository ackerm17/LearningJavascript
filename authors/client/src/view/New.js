import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const New = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors',
        {name})
        .then((res)=> {console.log(res); navigate('/')})
        .catch((err)=> {console.log("error occurred", err);
        setErrors(err.response.data.errors)})
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/'}>Home</Link>
            <h2>Add a new Author</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Author Name:</label>
                    <input type="text" onChange={e=> setName(e.target.value)}></input>
                </p>
                {
                    errors?.name && (
                        <span>
                            {errors?.name?.message}
                        </span>
                    )
                }
                <input type="submit"></input>
                <Link to={'/'}>Cancel</Link>
            </form>
        </div>
    )
}
export default New;
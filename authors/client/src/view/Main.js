import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[])

    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id != id));
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/api/authors'}>Add an Author</Link>
            <h3>Our Authors</h3>
            <hr/>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}


export default Main;
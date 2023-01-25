import React, {useState} from 'react';

import axios from 'axios';

export default props=> {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState();
    const [Description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',
        {Title, Price, Description})
        .then(res=> console.log("Response:", res))
        .catch(err=> console.log("error occurred", err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label>
                <input type="text" onChange={e=> setTitle(e.target.value)}></input>
            </p>
            <p>
                <label>Product Price</label>
                <input type="text" onChange={e=> setPrice(e.target.value)}></input>
            </p>
            <p>
                <label>Product Description</label>
                <input type="text" onChange={e=> setDescription(e.target.value)}></input>
            </p>
            <input type="submit"></input>
        </form>
    )
}
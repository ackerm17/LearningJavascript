import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState();
    const [Description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateproduct/' + id, {
            Title,Price,Description
        })
            .then(res=>console.log(res), navigate('/'))
            .catch(err=>console.log(err))
    }

    return(
        <form onSubmit={updateProduct}>
            <h1>Update Product</h1>
            <p>
                <label>Product Name</label>
                <input type="text" name='Title' value={Title} onChange={(e) => {setTitle(e.target.value)}}></input>
            </p>
            <p>
                <label>Product Price</label>
                <input type="text" name='Price' value={Price} onChange={(e) => {setPrice(e.target.value)}}></input>
            </p>
            <p>
                <label>Product Description</label>
                <input type="text" name='Description' value={Description} onChange={(e) => {setDescription(e.target.value)}}></input>
            </p>
            <input type="submit"></input>
        </form>
    );
}

export default Update;
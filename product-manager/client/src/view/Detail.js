import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);
    
    return (
        <div>
            <h2>Product Name: {product.Title}</h2>
            <p>Product Price: {product.Price}</p>
            <p>Product Description: {product.Description}</p>
        </div>
    )
}
    
export default Detail;

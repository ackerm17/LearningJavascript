import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    const {removeFromDom} = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/deleteproduct/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            {props.products.map( (product) =>
                <div key={product._id}>
                <Link to={"/api/products/" + product._id} >{product.Title}</Link>
                <Link to={"/api/productupdate/" + product._id}>Update</Link>
                |
                <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;
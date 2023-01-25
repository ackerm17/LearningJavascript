import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductList = (props) => {

    return (
        <div>
            {props.products.map( (product) =>
                <div key={product.id}>
                <Link to={"/api/products/" + product._id} >{product.Title}</Link>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;
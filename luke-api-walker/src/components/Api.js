import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Api = (props) => {
    const [datalist, setDatalist] = useState([]);
    const {category, num} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${num}`)
        .then(response => {
            console.log(category);
            console.log(num);
            console.log(response);
            let display = Object.entries(response.data);
            setDatalist(display);
            console.log(display);
        }
            )
    }, [category, num])

    return(
        <>
            {datalist.map((item, key) => {
                return(
                    <div key={key}>
                        <p>{item[0]} : {item[1]}</p>
                    </div>
                    );
            })}
        </>
    );
}

export default Api;
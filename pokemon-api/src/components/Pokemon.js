import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Pokemon = (props) => {
    const [pokelist, setPokelist] = useState([]);
    const [boolean, setBoolean] = useState(false);

    useEffect(() => {
                axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
                .then(response => {
                    // we now run another promise to parse the HTTP response into usable JSON
                    console.log(response);
                    setPokelist(response.data.results);
                }).catch(err=>{
                    console.log(err);
                });
    },[])

    const trulse = (e) => {
        if(boolean == false){
            setBoolean(true);
        } else{
            setBoolean(false);
        }
    }


    return(
        <div>
                <button onClick={trulse}>Grab Pokemon</button>
                {boolean&&
                <div>
                {
                pokelist.map((item,key) => 
                <div key={key}>
                    <p>{item.name}</p>
                </div>
                )}</div>
                }
        </div>
    );

}

export default Pokemon;
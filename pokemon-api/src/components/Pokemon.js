import React, { useState } from  'react';

const Pokemon = (props) => {
    const [pokelist, setPokelist] = useState([]);

    const makePokelist = (e) => {
                fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
                    .then(response => {
                    // not the actual JSON response body but the entire HTTP response
                    return response.json();
                }).then(response => {
                    // we now run another promise to parse the HTTP response into usable JSON
                    console.log(response);
                    setPokelist(response.results);
                }).catch(err=>{
                    console.log(err);
                });
    }

    return(
        <div>
            <button onClick={() => makePokelist()}>Grab Pokemon</button>
                {pokelist.map((item,key) => 
                <div key={key}>
                    <p>{item.name}</p>
                </div>
                )}
        </div>
    );

}

export default Pokemon;
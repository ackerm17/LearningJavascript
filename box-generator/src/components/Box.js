import React, { useState } from  'react';

const Box = (props) => {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("");

    const addColor = (dis) => {
        setColor(dis);
    }

    const addBox = (e) => {
        e.preventDefault();
        boxes.push(color);
        setBoxes([...boxes]);
    }

    return(
        <form onSubmit={addBox}>
            <div>
                <h1>Color</h1>
                <input type="text" onChange={(e) => addColor(e.target.value)}></input>
                <input type="submit"/>
            </div>
            <div>
                {boxes.map((item,key) => <div key={key} className='box' style={{backgroundColor: item}}></div>)}
            </div>
        </form>
    );
};

export default Box;
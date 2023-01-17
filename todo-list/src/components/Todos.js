import React, { useState } from  'react';

const Todos = (props) => {
    const [todoses, setTodoses] = useState([]);
    const [content, setContent] = useState("");
    const [todoID, setTodoID] = useState(0);

    const addContent = (dis) => {
        setContent(dis);
    }

    const addTodo = (e) => {
        e.preventDefault();
        todoses.push({con:content, done: false, td: "none", id: todoID});
        setTodoID(todoID + 1);
        setTodoses([...todoses]);
    }

    const done = (key) => {
        if(todoses[key].done){
            todoses[key].done = false;
            todoses[key].td = "none";
        } else {
            todoses[key].done = true;
            todoses[key].td = "line-through";
        }
        setTodoses([...todoses]);
    }

    const obliterate = (key) => {
        todoses.splice(key, 1);
        console.log(todoses);
        setTodoses([...todoses]);
    }

    return(
        <form onSubmit={addTodo}>
            <div>
                <h1>Add Todo</h1>
                <input type="text" onChange={(e) => addContent(e.target.value)}></input>
                <input type="submit"></input>
            </div>
            <div>
                {todoses.map((item,key) => 
                <div key={item.id}>
                    <p style={{textDecoration:item.td}}>{key} {item.con}</p> <input type="checkbox" onChange={ () => done(key)}></input> <button onClick={() => obliterate(key)}>Delete</button>
                </div>)}
            </div>
        </form>
    );
}

export default Todos;
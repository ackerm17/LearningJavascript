import React from 'react'
import { useNavigate} from "react-router-dom";


const Form = (props) => {
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        navigate(`/${props.category}/${props.id}`)
    }

    const setCat = (e) => {
        props.setCategory(e.target.value);
    }

    const setId = (e) => {
        props.setId(e.target.value);
    }


    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor=''>Category</label>
                <select onClick={setCat}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <label htmlFor=''>Search by Id</label>
                <input type="number" onChange={setId} placeholder={1}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Form;
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cPassword, setCPassword] = useState("");  

    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <h1> First Name: {firstName} </h1>
            <h1> Last Name: {lastName} </h1>
            <h3> Email: {email}</h3>
            <h3> password: {password}</h3>
            <h3> confirm password: {cPassword}</h3>

            </form>
    );
};
    
export default UserForm;

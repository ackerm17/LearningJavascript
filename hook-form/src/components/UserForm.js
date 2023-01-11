import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cPassword, setCPassword] = useState("");  

    const checkLength = (string, num, subject) => {
        if(string.length == 0){
            return null;
        } else if(string.length < num) {
            return subject + " must be at least " + num + " characters long.";
        } else {
            return null;
        }
    }

    const comparePass = (pass1, pass2) => {
        if(pass1 == pass2){
            return null;
        }else{
            return "Password and Confirm Password must match";
        }
    }

    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                <p> {checkLength(firstName, 2, "First Name")} </p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                <p> {checkLength(lastName, 2, "Last Name")} </p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                <p> {checkLength(email, 2, "Email")} </p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                <p> {checkLength(password, 8, "Password")} </p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setCPassword(e.target.value) } />
                <p> {checkLength(cPassword, 8, "Confirm Password")} </p>
                <p> {comparePass(password, cPassword)} </p>
                
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

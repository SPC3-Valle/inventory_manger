import React, {useState} from "react";
import App from "../App"
import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

export default function Profiler() {
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUserName] = useState();
    const [password, setPasswordTitle] = useState();
    const navigate = useNavigate()

    function addAccount() {
        // console.log(username)
        // console.log(password)
        // console.log(firstname)
        // console.log(lastname)
        const newAccount = {
            First_Name: firstname,
            Last_Name: lastname,
            Username: username,
            Password: password
        }
        if(firstname == (undefined || "") || lastname == (undefined || "") || username == (undefined || "") || password == (undefined || "")) {
            alert("Please fill out all fields!")
        }
        else{
        console.log(newAccount)
        try { 
            const ace = fetch('http://localhost:8080/account_creation', {
            method: "POST",
            body: JSON.stringify(newAccount),
            headers: {
                "Content-Type": "application/json",
            },
        })
        alert("Account has been created!")
    }
    catch(error) {
    console.log(error)
    }
    navigate('/')
}
    }

    return(
        <div>
            <h2>Create an Account!</h2>
            <form onSubmit={addAccount}>
                <div>
                    <label>
                        First name:
                    </label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} id="First Name" />
                </div>
                <div>
                    <label>
                        Last name:
                    </label>
                    <input type="text" onChange={e => setLastName(e.target.value)} id="Last Name" />
                </div>
                <div>
                    <label>
                        Username:
                    </label>
                    <input type="text" onChange={e => setUserName(e.target.value)} id="Username" />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type="text" onChange={e => setPasswordTitle(e.target.value)} id="Password" />
                </div>
                <div>
                    <button type='submit'>Create Account</button>
                </div>
            </form>
        </div>
    )
}
import React, {useState} from "react";
import App from "../App"
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

// const Accept = () => {
//     Navigate('/')
// }

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
  
    function Reject() {
        alert("Please try again!")
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        navigate('/')
      }

//when username and password is found, it sends a success message at the correct position in the array
    function credCheck() {
        console.log(username)
        console.log(password)
        fetch('http://localhost:8080/user_creds')
        .then(res => res.json())
        .then(accs => {
            console.log(accs)
            for(let a = 0; a < accs.length; a++){
            if (accs[a].Username == username && accs[a].Password == password) {
                console.log("success2")
                //handleSubmit()
                const token = loginUser({
                    username,
                    password
                });
                setToken(token)
                navigate('/')
            }
            else{
                console.log("failure2") 
                Reject()
            }}
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Enter Username and Password</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        USERNAME:
                    <input type="text" onChange={e => setUserName(e.target.value)} id="USERNAME" />
                    </label>
                </div>
                <div>
                    <label>
                        PASSWORD:
                    <input type="text" onChange={e => setPassword(e.target.value)} id="PASSWORD" />
                    </label>
                </div>
                <div>
                    <button type='submit' >LOGIN</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };
import React, {useState} from "react";
import App from "../App"
import { Navigate, useNavigate } from "react-router-dom";
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
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
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
                    <input type="text" OnChange={e => setPassword(e.target.value)} id="PASSWORD" />
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
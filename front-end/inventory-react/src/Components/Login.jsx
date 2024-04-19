import React, {useState, useContext} from "react";
import App from "../App"
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { IdContext } from "./idContext";

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
    
    function Homeward() {
        navigate('/')
    }

    function Reject() {
        alert("Please try again!")
    }

    function Placer(a) {
    let { idNumber, setIdNumber } = React.useContext(IdContext);
        setIdNumber(a)
        console.log(idNumber)
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
    function CredCheck() {
        console.log(username)
        console.log(password)
        fetch('http://localhost:8080/user_creds')
        .then(res => res.json())
        .then(accs => {
            console.log(accs)
            for(let a = 0; a <= accs.length; a++){
            if (accs[a].Username == username && accs[a].Password == password) {
                let AccId = a + 1
                console.log("success")
                alert("Successful login!")
                //console.log(AccId)
                Placer(AccId)
                Homeward()
                //handleSubmit()
                // const token = loginUser({
                //     username,
                //     password
                // });
                setToken(AccId)
            }
            else{
                console.log("failure") 
                Reject()
            }}
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Enter Username and Password</h3>
            <form onSubmit={CredCheck}>
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
                    <button type='submit'>LOGIN</button>
                    <button type='submit' onClick={Homeward}>Go To Home</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };
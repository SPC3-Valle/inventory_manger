import React from "react";
import App from "../App"
import { Navigate, useNavigate } from "react-router-dom";

const Accept = () => {
    Navigate('/')
}

export default function Login() {
    return (
        <div>
            <h3>Enter Username and Password</h3>
            <form action="/">
                <div>
                    <label>
                        USERNAME:
                    </label>
                    <input type="text" id="USERNAME" />
                </div>
                <div>
                    <label>
                        PASSWORD:
                    </label>
                    <input type="text" id="PASSWORD" />
                </div>
                <div>
                    <button type='submit' >LOGIN</button>
                </div>
            </form>
        </div>
    )
}
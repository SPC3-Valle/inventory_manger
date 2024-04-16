import React from "react";
import App from "../App"
import { Navigate, useNavigate } from "react-router-dom";

export default function Profiler() {
    return(
        <div>
            <h2>Create an Account!</h2>
            <form action="/login">
                <div>
                    <label>
                        First name:
                    </label>
                    <input type="text" id="First Name" />
                </div>
                <div>
                    <label>
                        Last name:
                    </label>
                    <input type="text" id="Last Name" />
                </div>
                <div>
                    <label>
                        Username:
                    </label>
                    <input type="text" id="Usernmae" />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type="text" id="Password" />
                </div>
                <div>
                    <button type='submit'>Create Account</button>
                </div>
            </form>
        </div>
    )
}
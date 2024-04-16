import React from "react";
import App from "../App"

export default function Login() {
    return (
        <div>
            <h3>Enter Username and Password</h3>
            <form>
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
            </form>
        </div>
    )
}
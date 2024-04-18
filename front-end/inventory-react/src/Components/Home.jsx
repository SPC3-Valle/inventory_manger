import React from "react";
import App from "../App"
import Putting from "./Items";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1>Here is a Home.</h1>
                {/* <button onClick={itemArray()}>Show</button> */}
                <button type="button" onSubmit={navigate('/account_create')}>Create Account</button>
                <button type="button" onSubmit={navigate('/shelf')}>View Shelf</button>
            </div>
            <div className="=Displayer">
                <ul>
                    {<Putting />}
                {/* {Wall.map(item => (
                     <li key={item}>{item}</li>
                ))}
                    {itemShower()}
                    {console.log(itemShower())} */}
                </ul>
                {console.log("Time to put stuff here")}
            </div>
        </div>
    )
}
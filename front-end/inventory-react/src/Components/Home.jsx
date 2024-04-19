import React from "react";
import App from "../App"
import Putting from "./Items";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    function Pressed() {
        console.log("Take me to creator")
        navigate('/account_create')
    }

    function Pressed2() {
        console.log("Take me to the shelf")
        navigate('/shelf')
    }
    function Pressed3() {
        console.log("Take me out of here")
        navigate('/login')

    }
    return (
        <div>
            <div>
                <h1>Inventory Checker</h1>
                {/* <button onClick={itemArray()}>Show</button> */}
                <button type="button" onClick={Pressed}>Create Account</button>
                <button type="button" onClick={Pressed2}>View Your Shelf</button>
                <button type="button" onClick={Pressed3}>Log Out</button>
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
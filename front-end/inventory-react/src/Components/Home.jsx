import React from "react";
import App from "../App"
import Putting from "./Items";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Here is a Home.</h1>
                {/* <button onClick={itemArray()}>Show</button> */}
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
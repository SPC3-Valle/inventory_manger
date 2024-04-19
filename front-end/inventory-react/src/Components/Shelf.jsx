import React, {useState, useEffect} from "react";
import App from "../App"

export default function Shelf() {
    const [Stock, setStock] = useState([])

    useEffect(() => {
        Orbital()
    })

    const Orbital = async () => {
        const responce = await fetch('http://localhost:8080/owner/2');

        setStock(await responce.json())
    };
    return (
        // <div>
        //     <h1>Here is a Shelf.</h1>
        //     {console.log("Items will show here.")}
        // </div>
        <p>{Stock.map((data) => {
            return(
                <div>
                    <p> {data["Item Name"]}</p>
                    <li> {data.Description} </li>
                    <li> Quantity: {data.Quantity} </li>
                </div>
            )
        })}
        </p>
    )
}
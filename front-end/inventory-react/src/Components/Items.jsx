import React, {useState, useEffect} from "react";
import App from "../App"

export default function Putting() {

    const [Wall, setWall] = useState([])
    // function itemShower() {
    //     Display()
    //     Wall.map(function(element) {
    //     return element;
    //     }
    // )}

    // function itemArray() {
    //     Wall.map((item) => <ol>{item}</ol>)
    // }
    useEffect(() => {
        Walls()
    })

    const Walls = async () => {
        const responce = await fetch('http://localhost:8080/all_items');

        setWall(await responce.json())
    };

    // function Display () {
    //     fetch('http://localhost:8080/all_items')
    //     .then(res => res.json())
    //     .then(ite => {
    //         console.log(ite)
    //         for(let a = 0; a < ite.length; a++){
    //             Wall.push(`${ite[a]["Item Name"]}`) 
    //         }
    //     })
    //     .then(list => {
    //         Wall.map(list => list)
    //     })
    //     .catch(error => console.log(error))
    //     // itemArray()
    //     console.log(Wall)
    return(
            <p>{Wall.map((data) => {
                return(
                    <div>
                        <p> {data["Item Name"]}</p>
                        <li> {data.Description} </li> 
                    </div>
                )
            })}
            </p>
    )
}
import {CardObject} from "../models/CardObject.tsx";
import {useEffect, useState} from "react";
import * as abcjs from "abcjs";
import "./Card.css";

export default function Card({ cardObj }: Readonly<{ cardObj: CardObject}>) {

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    }

    useEffect(() => {
        const h: number = document.getElementById("card").clientHeight;
        console.log(h)

        abcjs.renderAbc(cardObj.front+cardObj.back, cardObj.front, {
            staffwidth: 50,
            responsive: "resize",
            paddingbottom: 0,
            paddingtop: 0,
            paddingright: 0,
            paddingleft: 0,
        });
    });

    return (
        <button id={"card"} className="card" onClick={handleClick}>
            {flipped ?
                <h1 className="front" id={cardObj.front+cardObj.back}>{cardObj.front}</h1>
                : <h1 className="back">{cardObj.back}</h1>}
        </button>

    )
}

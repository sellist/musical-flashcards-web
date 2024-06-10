import {CardObject} from "../models/CardObject.tsx";
import {useEffect, useState} from "react";
import * as abcjs from "abcjs";
import CSS from "csstype";
import "./Card.css"

const cardFront: CSS.Properties = {
    margin: "0",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
}
const cardBack: CSS.Properties = {
    display: "grid",
}
const cardContainer: CSS.Properties = {
    resize: "both",
    textAlign: "center",
    fontSize: "8vh",
    maxHeight: "80vh",
    minWidth: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    minHeight: "100%",
    margin: "0",
}



export default function Card({ cardObj }: Readonly<{ cardObj: CardObject}>) {

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    }

    useEffect(() => {
        abcjs.renderAbc(cardObj.front+cardObj.back, cardObj.front, {
            staffwidth: 50,
            responsive: "resize",
            paddingbottom: 1,
            paddingtop: -7,
            paddingright: 0,
            paddingleft: 0,
        });
    });

    return (
        <button style={cardContainer} className={"card-front"} onClick={handleClick}>
            {flipped ?
                <div style={cardFront} className={"svg-container"} id={cardObj.front+cardObj.back}>{cardObj.front}</div> :
                <h1 className={"card-back"} style={cardBack}>{cardObj.back}</h1>
            }
        </button>
    )
}

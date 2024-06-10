import {CardObject} from "../models/CardObject.tsx";
import Card from "./Card.tsx";
import {useState} from "react";
import CSS from "csstype";

const deckDisplay: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    margin: "0",
}

const buttonStyle: CSS.Properties = {
    display: "flex",
    margin: "0",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "20%",

}

export default function Deck({ cards }: Readonly<{ cards: CardObject[]}>) {

    const [cardIdx, setCardIdx] = useState<number>(0);

    const toShow = () => {
        if (cards.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return <Card cardObj={cards[cardIdx]}></Card>
        }

    };

    const handleNextCardOnClick = () => {
        setCardIdx(prev => (prev + 1) % cards.length);
    };

    const handlePrevCardOnClick = () => {
        setCardIdx(prev => (prev + 1) % cards.length);
    };



    return (
        <div style={deckDisplay}>
            <button style={buttonStyle} onClick={handlePrevCardOnClick}>Previous Card</button>
            {toShow()}
            <button style={buttonStyle} onClick={handleNextCardOnClick}>Next card</button>
        </div>
    )}
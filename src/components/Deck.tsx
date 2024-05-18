import {CardObject} from "../models/CardObject.tsx";
import Card from "./Card.tsx";
import "./Deck.css";

export default function Deck({ cards }: Readonly<{ cards: CardObject[]}>) {

    return (
        <div className="cardGrid">
            {cards.map(card =>
                <h1>{card.back.midiValue}</h1>
            )}
        </div>
    )}
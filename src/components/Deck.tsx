import {CardObject} from "../models/CardObject.tsx";
import Card from "./Card.tsx";

export default function Deck({ cards }: Readonly<{ cards: CardObject[]}>) {

    return (
        <div className="cardGrid">
            {cards.map(card =>
                <Card cardObj={card} key={card.front+card.back} />
            )}
        </div>
    )}
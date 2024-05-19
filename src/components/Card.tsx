import {CardObject} from "../models/CardObject.tsx";
import {useEffect} from "react";
import * as abcjs from "abcjs";

export default function Card({ cardObj }: Readonly<{ cardObj: CardObject}>) {

    useEffect(() => {
        console.log("cardObj: ", cardObj);

        abcjs.renderAbc(cardObj.front+cardObj.back, cardObj.front);

    });

    return (
        <div>
            <h1 id={cardObj.front+cardObj.back}>{cardObj.front}</h1>
            <h1>{cardObj.back}</h1>
        </div>

    )
}
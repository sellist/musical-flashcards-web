import {CardObject} from "../models/CardObject.tsx";

export default function Card({ cardObj }: Readonly<{ cardObj: CardObject}>) {
    return (
        <div>
            <h1>{cardObj.front.renderString}</h1>
            <h1>{cardObj.back.noteName}</h1>
        </div>

    )
}
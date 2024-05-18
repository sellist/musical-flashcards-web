import {useEffect, useState} from "react";
import CardService from "../service/CardService.tsx";
import {CardObject} from "../models/CardObject.tsx";
import PageContentContainer from "./PageContentContainer.tsx";
import Deck from "../components/Deck.tsx";

export default function DeckContainer() {
    const [cards, setCards] = useState<CardObject[]>([]);

    useEffect(() => {

        const getScale = () => {
            const cardService = new CardService();

            cardService.impl.getCardsFromNoteNames(['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']).then(response => setCards(response.data));
        }




        getScale();
    }, []);

    return (
        <PageContentContainer>
            <Deck cards={cards} />
        </PageContentContainer>
    )
}
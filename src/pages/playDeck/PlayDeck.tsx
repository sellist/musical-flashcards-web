import DeckContainer from "../../containers/DeckContainer.tsx";
import NavbarVisiblePage from "../../containers/NavbarVisiblePage.tsx";


export default function PlayDeck() {
    return (
        <NavbarVisiblePage>
            <DeckContainer />
        </NavbarVisiblePage>
    )
}
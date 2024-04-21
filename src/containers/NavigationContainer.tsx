import NavigationButton from "../components/NavigationButton.tsx";

export default function NavigationContainer() {
    return (
        <div>
            <NavigationButton text="Deck" onClick={() => console.log("Deck")} />
            <NavigationButton text="Create Deck" onClick={() => console.log("Create Deck")} />
            <NavigationButton text="Card" onClick={() => console.log("Card")} />
        </div>
    )
}
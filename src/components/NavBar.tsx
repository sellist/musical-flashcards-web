import NavigationButton from "./NavigationButton.tsx";
import CSS from "csstype";

export default function NavBar() {
    return (
        <nav style={navStyles}>
            <div style={leftSideStyles}>
                <NavigationButton text="Home" path="/" />
                <NavigationButton text="Create Deck" path="/create" />
                <NavigationButton text="About" path="/about" />
                <NavigationButton text="Contact" path="/contact" />
                <NavigationButton text="Play" path="/deck" />
            </div>
        </nav>

    )
}


const navStyles: CSS.Properties = {
    display: "flex",
    height: "var(--nav-bar-height)",
    justifyContent: "left",
    alignItems: "center",
    width: "98vw",
    backgroundColor: "white",
    padding: "0.5vw",
    margin: "0px",
    marginRight: "0.5vw",
    marginLeft: "0.5vw",
    marginTop: "0.25vw",
    borderRadius: "5px",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
}

const leftSideStyles: CSS.Properties = {
    display: "flex",
    gap: "10px",
}


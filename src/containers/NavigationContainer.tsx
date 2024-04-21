import NavigationButton from "../components/NavigationButton.tsx";
import {useNavigate} from "react-router-dom";
import CSS from "csstype";

const navStyles: CSS.Properties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
}

export default function NavigationContainer() {
    const navigate = useNavigate();
    return (
        <nav style={navStyles}>
            <NavigationButton text="Home" onClick={() => navigate("/")} />
            <NavigationButton text="Create Deck" onClick={() => navigate("/create")} />
            <NavigationButton text="About" onClick={() => navigate("/about")} />
            <NavigationButton text="Contact" onClick={() => navigate("/contact")} />
        </nav>
    )
}
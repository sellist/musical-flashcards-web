import {Link} from "react-router-dom";
import {Button, } from "@mui/material";
import CSS from "csstype";

const buttonStyle: CSS.Properties = {
    backgroundColor: "var(--button-background-color)",
    height: "100%"
}

export default function NavigationButton({text, path}:
    Readonly<{ text: string, path: string }>) {
    return (
        <Link to={path}>
            <Button style={buttonStyle}>{text}</Button>
        </Link>
    )
}
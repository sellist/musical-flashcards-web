import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette.tsx'
import Card from "../components/Card.tsx";
import NavBar from "../components/NavBar.tsx";
import NavigationButton from "../components/NavigationButton.tsx";
import Contact from "../pages/contact/Contact.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/NavBar">
                <NavBar/>
            </ComponentPreview>
            <ComponentPreview path="/NavigationButton">
                <NavigationButton text={"hello"} path={"/"}/>
            </ComponentPreview>
            <ComponentPreview path="/NavBar">
                <NavBar/>
            </ComponentPreview>
            <ComponentPreview path="/Contact">
                <Contact/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
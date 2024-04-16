import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Card from "../components/Card.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
import CSS from "csstype";
import {useEffect, useState} from "react";
import {Note} from "../models/Note.tsx";
import ScaleService from "../service/ScaleService.tsx";

const styles: CSS.Properties = {

}


export default function DeckContainer() {
    const [scale, setScale] = useState<Note[]>([]);

    useEffect(() => {
        const getScale = () => {
            const service = new ScaleService();
            service.impl.getScale('C', 'major', 4).then(response => setScale(response.data));
        }

        getScale();
    }, []);

    return (
        <div style={styles}>
            <h1>DeckContainer</h1>
            <div>
                {scale.map(note =>
                    <div key={note.noteName + note.octave}>
                        {note.noteName}
                        {note.octave}
                    </div>
                )}
            </div>
        </div>
    )
}
import PageContentContainer from "./PageContentContainer.tsx";
import {useEffect, useState} from "react";
import {Note} from "../models/Note.tsx";
import NoteService from "../service/NoteService.tsx";

export default function CreatorContainer() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const getNotes = () => {
            const service = new NoteService();
            service.impl.getNotes(["C4","D4","Eb4","G#6"]).then(response => setNotes(response.data));
        }
        getNotes();
    }, []);
    return (
        <PageContentContainer>
            <div>
                {notes.map(note =>
                    <div key={note.noteName + note.octave}>
                        {note.noteName}
                        {note.octave}
                    </div>
                )}
            </div>
        </PageContentContainer>

        //     call api to get available scales, notes, etc and create selctors for each
        //     on returned fields, generate areas to select
    )
}
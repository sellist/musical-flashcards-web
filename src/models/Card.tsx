import {ABSJsDisplay} from "./ABSJsDisplay.tsx";
import {Note} from "./Note.tsx";

export type Card = {
    front: ABSJsDisplay;
    back: Note;
}
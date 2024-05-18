import {Note} from "./Note.tsx";

export interface NotesByNameRequest {
    notes: string[];
}

export interface ScaleRequest {
    tonic: string;
    scaleType: string;
    octave: number;
}

export interface InstrumentsByFamilyRequest {
    family: string;
}

export interface AdjustedNoteRequest {

}

export type CardRequest = {
    notes: Note[];
}
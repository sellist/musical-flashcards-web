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

export type CardsByNoteRequest = {
    notes: Note[];
}

export type CardsByCriteriaRequest = {
    startingNote: string;
    scaleType: string;
    octaves: number;
    instrument: string;
}
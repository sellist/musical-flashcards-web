export type Note = {
    octave: number;
    noteName: string;
    modifier: number;
    midiValue: number;
    transposition: number;
    transposedNote: Note;
}
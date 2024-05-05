import {Note} from "../../models/Note.tsx";
import ApiResponse from "../../models/ApiResponse.tsx";

interface NoteAPIInterface {
    getNotes: (notes: string[]) => Promise<ApiResponse<Note[]>>;
}

export default NoteAPIInterface;
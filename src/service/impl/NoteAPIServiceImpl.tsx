import axios from "axios";
import {NotesByNameRequest} from "../../models/RequestModels.tsx";
import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";
import NoteAPIInterface from "../interface/NoteAPIInterface.tsx";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

class NoteAPIServiceImpl implements NoteAPIInterface {

    getNotes(notes: string[]): Promise<ApiResponse<Note[]>> {

        const request:NotesByNameRequest = {
            notes: notes
        }

        return axios.post(`${BASE_URL}/notes`, request).then(response => response.data);
    }
}

export default NoteAPIServiceImpl;
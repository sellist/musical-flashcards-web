import {NotesByNameRequest} from "../../models/RequestModels.tsx";
import axios from "axios";
import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";
import NoteAPIInterface from "../interface/NoteAPIInterface.tsx";

class MockScaleServiceImpl implements NoteAPIInterface{

    async getNotes(notes: string[]): Promise<ApiResponse<Note[]>>{
        const request: NotesByNameRequest = {
            notes: notes
        }

        console.log("notes request body: ", request);

        return await axios.get('/static/mockResponses/mockNotesResponse.json').then(response => response.data);
    }
}

export default MockScaleServiceImpl;
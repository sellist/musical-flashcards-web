import ApiResponse from "../../models/ApiResponse.tsx";
import {NotesByNameRequest} from "../../models/RequestModels.tsx";
import axios from "axios";
import CardAPIInterface from "../interface/CardAPIInterface.tsx";
import {CardObject} from "../../models/CardObject.tsx";

class MockCardServiceImpl implements CardAPIInterface {

    async getCardsFromNoteNames(notes: string[]): Promise<ApiResponse<CardObject[]>>{
        const request: NotesByNameRequest = {
            notes: notes
        }

        console.log("cards request body: ", request);

        return await axios.get('/static/mockResponses/mockCardResponse.json').then(response => response.data);
    }
}

export default MockCardServiceImpl;
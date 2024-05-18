import axios from "axios";
import {NotesByNameRequest} from "../../models/RequestModels.tsx";
import ApiResponse from "../../models/ApiResponse.tsx";
import {CardObject} from "../../models/CardObject.tsx";
import CardAPIInterface from "../interface/CardAPIInterface.tsx";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

class CardAPIServiceImpl implements CardAPIInterface {

    async getCardsFromNoteNames(notes: string[]): Promise<ApiResponse<CardObject[]>> {

        const body:NotesByNameRequest = {
            notes: notes
        }

        return axios.post(`${BASE_URL}/card/from-notes`, body).then(response => response.data);
    }

}

export default CardAPIServiceImpl;
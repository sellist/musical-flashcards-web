import axios from "axios";
import {ScaleRequest} from "../../models/RequestModels.tsx";
import MockApiService from "../mock/MockApiService.tsx";
import ScaleApi from "../interface/ScaleApiInterface.tsx";
import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";

const environment: string = import.meta.env.VITE_NODE_ENV;
const BASE_URL: string = "http://localhost:8080";

class ScaleAPIServiceImpl implements ScaleApi {

    constructor() {
        if (environment == "DEV") {
            return new MockApiService();
        }
    }

    async getScale(tonic: string, scaleType: string, octave: number): Promise<ApiResponse<Note[]>> {

        const body:ScaleRequest = {
            tonic: tonic,
            scaleType: scaleType,
            octave: octave
        }

        return axios.post(`${BASE_URL}/scale`, body).then(response => response.data);
    }

}

export default ScaleAPIServiceImpl;
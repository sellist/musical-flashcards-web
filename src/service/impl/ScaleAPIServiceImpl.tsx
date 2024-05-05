import axios from "axios";
import {ScaleRequest} from "../../models/RequestModels.tsx";
import ScaleApiInterface from "../interface/ScaleApiInterface.tsx";
import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

class ScaleAPIServiceImpl implements ScaleApiInterface {

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
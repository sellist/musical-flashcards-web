import {ScaleRequest} from "../../models/RequestModels.tsx";
import ScaleApiInterface from "../interface/ScaleApiInterface.tsx";
import axios from "axios";
import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";

class MockScaleServiceImpl implements ScaleApiInterface{

    async getScale(tonic: string, scaleType: string, octave: number): Promise<ApiResponse<Note[]>>{

        const body: ScaleRequest = {
            tonic: tonic,
            scaleType: scaleType,
            octave: octave
        }

        console.log("scale request body: ", body);

        return await axios.get('/static/mockResponses/mockDeckResponse.json').then(response => response.data);
    }
}

export default MockScaleServiceImpl;
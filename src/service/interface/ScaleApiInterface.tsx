import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";

interface ScaleApi {
    getScale: (tonic: string, scaleType: string, octave: number) => Promise<ApiResponse<Note[]>>;
}

export default ScaleApi;
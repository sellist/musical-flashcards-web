import ApiResponse from "../../models/ApiResponse.tsx";
import {Note} from "../../models/Note.tsx";

interface ScaleApiInterface {
    getScale: (tonic: string, scaleType: string, octave: number) => Promise<ApiResponse<Note[]>>;
}

export default ScaleApiInterface;
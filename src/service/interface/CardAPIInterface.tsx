import ApiResponse from "../../models/ApiResponse.tsx";
import {CardObject} from "../../models/CardObject.tsx";

interface CardAPIInterface {
    getCardsFromNoteNames: (notes: string[]) => Promise<ApiResponse<CardObject[]>>;
}

export default CardAPIInterface;
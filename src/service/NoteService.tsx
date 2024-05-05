import NoteAPIInterface from "./interface/NoteAPIInterface.tsx";
import NoteAPIServiceImpl from "./impl/NoteAPIServiceImpl.tsx";
import MockNoteServiceImpl from "./mock/MockNoteServiceImpl.tsx";

const environment: string = import.meta.env.VITE_NODE_ENV;

class NoteService {
    impl: NoteAPIInterface;
    constructor() {
        if (environment == "LOCAL") {
            this.impl = new MockNoteServiceImpl();
        } else {
            this.impl = new NoteAPIServiceImpl();
        }
    }

}

export default NoteService;
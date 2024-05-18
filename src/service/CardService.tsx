import CardAPIInterface from "./interface/CardAPIInterface.tsx";
import MockCardServiceImpl from "./mock/MockCardServiceImpl.tsx";
import CardAPIServiceImpl from "./impl/CardAPIServiceImpl.tsx";

const environment: string = import.meta.env.VITE_NODE_ENV;

class CardService {
    impl: CardAPIInterface;
    constructor() {
        if (environment == "LOCAL") {
            this.impl = new MockCardServiceImpl();
        } else {
            this.impl = new CardAPIServiceImpl();
        }
    }

}

export default CardService;
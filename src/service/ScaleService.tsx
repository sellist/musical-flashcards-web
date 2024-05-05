import ScaleAPIServiceImpl from "./impl/ScaleAPIServiceImpl.tsx";
import MockScaleServiceImpl from "./mock/MockScaleServiceImpl.tsx";
import ScaleApiInterface from "./interface/ScaleApiInterface.tsx";

const environment: string = import.meta.env.VITE_NODE_ENV;

class ScaleService {
    impl: ScaleApiInterface;
    constructor() {
        if (environment == "LOCAL") {
            this.impl = new MockScaleServiceImpl();
        } else {
            this.impl = new ScaleAPIServiceImpl();
        }
    }

}

export default ScaleService;
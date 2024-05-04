import ScaleAPIServiceImpl from "./impl/ScaleAPIServiceImpl.tsx";
import MockApiService from "./mock/MockApiService.tsx";
import ScaleApi from "./interface/ScaleApiInterface.tsx";

const environment: string = import.meta.env.VITE_NODE_ENV;

class ScaleService {
    impl: ScaleApi;
    constructor() {
        if (environment == "DEV") {
            this.impl = new MockApiService();
        } else {
            this.impl = new ScaleAPIServiceImpl();
        }
    }

}

export default ScaleService;
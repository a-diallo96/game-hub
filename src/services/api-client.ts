import { CanceledError } from "axios";
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dde626b0208247c89d071bc4117c076e'
    }
})  

export {CanceledError}
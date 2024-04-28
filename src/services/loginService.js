
import { apiRoutes } from "@/api/ApiRoutes";
import axios from "axios";
import createApiService from "./createApiService";

const loginApiService = createApiService(apiRoutes.login.login);

const loginService = {
    ...loginApiService,
    // Fetch here others reviews

    userLogin: async (val) => {
        try {
            const url = `${ apiRoutes.login.login }`;
            console.log('url:', url);
            const response = await axios.post(url, val);

            console.log('response from loginService:', response.data);

            if (response && response.status === 201) {
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    }

}

export default loginService;
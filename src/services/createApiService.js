import axios from "axios";

export const createApiService = (apiRoute, defineStore) =>{
  const fetchLists = async (queryString) => {
    try {
        const url = `${apiRoute}${queryString ? `?${queryString}` : ''}`;
        console.log('url:', url);
        const response = await axios.get(url);

        console.log('response from createAPiService:', response.data.data);

        if (response && response.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        throw error;
    }
};
return {
  fetchLists,
};
}

export default createApiService;
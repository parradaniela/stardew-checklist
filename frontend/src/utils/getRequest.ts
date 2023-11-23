import axios from "axios";
import { Cache, DbData, InputFormData } from "../types/types";

const dataCache: Cache = {};
const getRequest = async (requestParams: InputFormData): Promise<DbData[]> => {
    const { game, season } = requestParams;
    const cacheKey = `${game}-${season}`;
    if (dataCache[cacheKey]) {
        return dataCache[cacheKey];
    }

    return axios
        .get(`http://localhost:3500/forage/${game}/${season}`)
        .then((response) => {
            dataCache[cacheKey] = response.data;
            return response.data;
        })
        .catch((error) => {
            console.log("There was an error calling the database!", error);
            return [];
        });
};

export default getRequest;

import axios from "axios";
import { DbData, InputFormData } from "../types/types";

const getRequest = (requestParams: InputFormData): Promise<DbData[]> => {
    const { game, season } = requestParams;
    return axios
        .get(`http://localhost:3500/forage/${game}/${season}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("There was an error calling the database!", error);
            return [];
        });
};

export default getRequest;

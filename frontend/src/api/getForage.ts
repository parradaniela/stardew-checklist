import axios from "axios";
import { DbData, InputFormData } from "../types/types";

const baseUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3500";

import { QueryFunctionContext } from "react-query";

export const getForage = async (
    context: QueryFunctionContext<(string | InputFormData)[]>,
): Promise<DbData[]> => {
    // Extract the form values from the query key
    const [_, formValues] = context.queryKey;
    const { game, season } = formValues as InputFormData;

    return axios
        .get(`${baseUrl}/forage/${game}/${season}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("There was an error calling the database!", error);
            return [];
        });
};

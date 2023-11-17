import { createContext, useState, useEffect } from "react";
import { InputFormData, AppDataContext, DbData, ContextChildren } from "../types/types";
import { initialFormValues, initialContextState, initialDbResponseValues } from "./initialStates";
import axios from "axios";

export const DataContext = createContext<AppDataContext>(initialContextState);

const DataProvider = ({ children }: ContextChildren) => {
    const [formValues, setFormValues] = useState<InputFormData>(initialFormValues);
    const [dbResponse, setDbResponse] = useState<DbData[]>(initialDbResponseValues)

    // Setting the default data for the db
    useEffect(() => {
        axios.get('https://localhost:3500/base/Spring')
            .then(response => {
                setDbResponse(response.data)
            })
            .catch(error => {
                console.log("There was an error calling the database!", error)
            })
    }, [])

    return (
        <DataContext.Provider
            value={{
                formValues,
                dbResponse,
                setFormValues,
                setDbResponse
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
import { createContext, useState } from "react";
import { InputFormData, AppDataContext, DbData, ContextChildren } from "../types/types";
import { initialFormValues, initialContextState, initialDbResponseValues } from "./initialStates";

export const DataContext = createContext<AppDataContext>(initialContextState);

const DataProvider = ({ children }: ContextChildren) => {
    const [formValues, setFormValues] = useState<InputFormData>(initialFormValues);
    const [dbResponse, setDbResponse] = useState<DbData[]>(initialDbResponseValues)

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
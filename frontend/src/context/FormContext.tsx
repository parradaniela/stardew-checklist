import { createContext, useState } from "react";
import {
    InputFormData,
    FormValuesContext,
    ContextChildren,
} from "../types/types";
import { initialFormValues, initialContextState } from "./initialStates";

export const FormContext =
    createContext<FormValuesContext>(initialContextState);

const FormProvider = ({ children }: ContextChildren) => {
    const [formValues, setFormValues] =
        useState<InputFormData>(initialFormValues);

    return (
        <FormContext.Provider
            value={{
                formValues,
                setFormValues,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;

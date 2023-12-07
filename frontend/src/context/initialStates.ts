import { InputFormData, FormValuesContext } from "../types/types";

export const initialFormValues: InputFormData = {
    game: "base",
    yearOne: false,
    season: "Spring",
};

export const initialContextState: FormValuesContext = {
    formValues: initialFormValues,
    setFormValues: () => {},
};

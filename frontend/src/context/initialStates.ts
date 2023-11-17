import { InputFormData, DbData, AppDataContext } from "../types/types";

export const initialFormValues: InputFormData = {
    game: "base",
    yearOne: false,
    season: "Spring",
};

export const initialDbResponseValues: DbData[] = [
    {
        name: "",
        imgUrl: "",
        wikiUrl: "",
        locations: [],
        seasons: [],
        yearOneAvail: false,
        game: "",
    },
];

export const initialContextState: AppDataContext = {
    formValues: initialFormValues,
    dbResponse: initialDbResponseValues,
    setFormValues: () => {},
    setDbResponse: () => {},
};

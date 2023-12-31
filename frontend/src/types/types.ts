import { Dispatch, ReactNode, SetStateAction } from "react";

export type ForageObj = {
    name: string;
    imgId: string;
    wikiUrl: string;
    locations: string[];
};

export type InputFormData = {
    game: string;
    yearOne: boolean;
    season: string;
};

export type DbData = {
    name: string;
    imgUrl: string;
    imgId: string;
    wikiUrl: string;
    locations: string[];
    seasons: string[];
    yearOneAvail: boolean;
    game: string;
};

export type TabStyles = {
    [key: string]: string;
};
export interface FormValuesContext {
    formValues: InputFormData;
    setFormValues: Dispatch<SetStateAction<InputFormData>>;
}

export type radioAttributeType = {
    label: string;
    name: string;
    id: string;
    value: string;
};

export type ContextChildren = {
    children: ReactNode;
};

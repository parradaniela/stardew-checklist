import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { TabStyles, radioAttributeType } from "../types/types";

type Props = {
    attributes: radioAttributeType;
    isChecked: boolean;
};
const RadioInput = ({ attributes, isChecked }: Props) => {
    const { label, name, id, value } = attributes;
    const { formValues, setFormValues } = useContext(FormContext);

    const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
    const checkedTabStyles: TabStyles = {
        Spring: "bg-pink-400 border-pink-600",
        Summer: "bg-sky-400 border-sky-600",
        Fall: "bg-orange-400 border-orange-600",
        Winter: "bg-indigo-400 border-indigo-600",
    };

    const tabStyles: TabStyles = {
        Spring: "hover:bg-pink-200 hover:border-pink-400 focus:bg-pink-200 focus:border-pink-400",
        Summer: "hover:bg-sky-200 hover:border-sky-400 focus:bg-sky-200 focus:border-sky-400",
        Fall: "hover:bg-orange-200 hover:border-orange-400 focus:bg-orange-200 focus:border-orange-400",
        Winter: "hover:bg-indigo-200 hover:border-indigo-400 focus:bg-indigo-200 focus:border-indigo-400",
    };

    return (
        <div className="flex basis-full items-stretch justify-center sm:basis-[45%] lg:basis-1/4">
            <label
                htmlFor={id}
                className={`w-full cursor-pointer border-8 py-4 text-center text-3xl font-bold text-stardew_dark_brown transition-all sm:py-5 ${
                    formValues.season === label
                        ? `text-black ${
                              checkedTabStyles[label as keyof TabStyles]
                          }`
                        : `border-stardew_persian_orange bg-stardew_light_cream hover:text-black ${
                              tabStyles[label as keyof TabStyles]
                          }`
                }`}
            >
                {label}
            </label>
            <input
                type="radio"
                id={id}
                value={value}
                name={name}
                onChange={handleRadioInputChange}
                defaultChecked={isChecked}
                className="hidden"
            />
        </div>
    );
};

export default RadioInput;

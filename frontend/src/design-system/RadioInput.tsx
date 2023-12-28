import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { radioAttributeType } from "../types/types";

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
    return (
        <div className="flex justify-center gap-2">
            <label htmlFor={id} className="text-xl">
                {label}
            </label>
            <input
                type="radio"
                id={id}
                value={value}
                name={name}
                onChange={handleRadioInputChange}
                defaultChecked={isChecked}
                className="w-10 cursor-pointer accent-stardew_dark_brown"
            />
        </div>
    );
};

export default RadioInput;

import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { radioAttributeType } from "../types/types";

type Props = {
    attributes: radioAttributeType,
    isChecked: boolean
}
const RadioInput = ({ attributes, isChecked }: Props) => {
    const { label, name, id, value } = attributes;
    const { formValues, setFormValues } = useContext(FormContext)

    const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="radio"
                id={id}
                value={value}
                name={name}
                onChange={handleRadioInputChange}
                defaultChecked={isChecked}
            />
        </div>
    )
}

export default RadioInput
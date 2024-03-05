import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { radioAttributeType } from "../../../types/types";
import InputLabel from "../../../design-system/InputLabel";
import RadioInput from "../../../design-system/RadioInput";

type Props = {
    attributes: radioAttributeType;
    i: number;
};

const FormInput = ({ attributes, i }: Props) => {
    const { name, label, id } = attributes;
    const { formValues, setFormValues } = useContext(FormContext);

    const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex justify-center gap-2">
            <InputLabel id={id} labelText={label} />
            <RadioInput
                name={name}
                id={id}
                value={id}
                isChecked={i === 0}
                handleChange={handleRadioInputChange}
                key={id}
            />
        </div>
    )
}

export default FormInput
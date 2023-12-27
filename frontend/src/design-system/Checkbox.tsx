import { useContext } from "react";
import { FormContext } from "../context/FormContext";

type Props = {
    labelText: string,
    id: string
}

const Checkbox = ({ labelText, id }: Props) => {
    const { formValues, setFormValues } = useContext(FormContext);
    const handleCheckboxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.checked,
        });
    }
    return (
        <div className="self-center flex justify-center gap-2">
            <label
                htmlFor={id}
                className="text-xl"
            >
                {labelText}
            </label>
            <input
                type="checkbox"
                id={id}
                name={id}
                onChange={handleCheckboxInputChange}
                className="accent-stardew_dark_brown w-10 cursor-pointer"
            />
        </div>
    )
}

export default Checkbox
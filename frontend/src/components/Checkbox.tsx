import { useContext } from "react";
import { DataContext } from "../context/DataContext";

type Props = {
    labelText: string,
    id: string
}

const Checkbox = ({ labelText, id }: Props) => {
    const { formValues, setFormValues } = useContext(DataContext);
    const handleCheckboxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.checked,
        });
    }
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input
                type="checkbox"
                id={id}
                name={id}
                onChange={handleCheckboxInputChange}
            />
        </div>
    )
}

export default Checkbox
import { radioAttributeType } from "../../../data/formInputs";

type Props = {
    attributes: radioAttributeType,
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const RadioInput = ({ attributes, handleFormChange }: Props) => {
    const { label, name, id, value } = attributes;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="radio"
                id={id}
                value={value}
                name={name}
                onChange={handleFormChange}
                defaultChecked
            />
        </div>
    )
}

export default RadioInput
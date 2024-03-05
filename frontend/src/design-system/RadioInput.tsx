type Props = {
    name: string;
    id: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
};
const RadioInput = ({ name, id, value, handleChange, isChecked }: Props) => {
    return (
        <input
            type="radio"
            id={id}
            value={value}
            name={name}
            onChange={handleChange}
            defaultChecked={isChecked}
            className="w-10 cursor-pointer accent-stardew_dark_brown"
        />
    );
};

export default RadioInput;

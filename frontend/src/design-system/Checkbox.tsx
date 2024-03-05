type Props = {
    id: string;
    state: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ id, state, setter }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.checked);
    };
    return (
        <input
            type="checkbox"
            id={id}
            name={id}
            onChange={handleChange}
            className="w-10 cursor-pointer accent-stardew_dark_brown"
            checked={state}
        />
    );
}

export default Checkbox
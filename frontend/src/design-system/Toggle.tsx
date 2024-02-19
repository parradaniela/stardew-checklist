type Props = {
    labelText: string;
    id: string;
    greyout: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
};
const Toggle = ({ labelText, id, greyout, setter }: Props) => {
    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.checked);
    };
    return (
        <div className="my-2 md:my-4 flex justify-center gap-2 self-center">
            <label htmlFor={id} className="text-xl">
                {labelText}
            </label>
            <input
                type="checkbox"
                id={id}
                name={id}
                onChange={handleToggleChange}
                className="w-10 cursor-pointer accent-stardew_dark_brown"
                checked={greyout}
                defaultChecked={false}
            />
        </div>
    );
};

export default Toggle;

type Props = {
    id: string;
    labelText: string;
};

const InputLabel = ({ id, labelText }: Props) => {
    return (
        <label htmlFor={id} className="text-lg sm:text-xl">
            {labelText}
        </label>
    );
};

export default InputLabel;

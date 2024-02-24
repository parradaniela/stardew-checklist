import React from "react";

type Props = {
    state: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dropdown = ({ state, setter }: Props) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "exclusive") {
            setter(true);
        } else {
            setter(false);
        }
    };
    return (
        <div>
            <label htmlFor="sort" className="text-xl">
                Sort by:{" "}
            </label>
            <select
                name="sort"
                id="sort"
                onChange={handleOptionChange}
                defaultValue={state ? "exclusive" : "alpha"}
                className="rounded-md border-2 border-stardew_dark_brown px-2 py-1 text-lg"
            >
                <option value="alpha">Alphabetical Only</option>
                <option value="exclusive">Season-Exclusive First</option>
            </select>
        </div>
    );
};

export default Dropdown;

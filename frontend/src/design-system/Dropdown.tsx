import React from 'react'

type Props = {
    state: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ state, setter }: Props) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "exclusive") {
            setter(true)
        } else {
            setter(false)
        }
    }
    return (
        <div>
            <label htmlFor="sort" className="text-xl">Sort by: </label>
            <select
                name="sort"
                id="sort"
                onChange={handleOptionChange}
                defaultValue={state ? "exclusive" : "alpha"}
                className='py-1 px-2 text-lg border-2 border-stardew_dark_brown rounded-md'
            >
                <option value="alpha">Alphabetical Only</option>
                <option value="exclusive">Season-Exclusive First</option>
            </select>
        </div>
    )
}

export default Dropdown
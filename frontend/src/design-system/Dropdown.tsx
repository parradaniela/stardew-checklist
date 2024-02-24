import React from 'react'

type Props = {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ setter }: Props) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "exclusive") {
            setter(true)
        } else {
            setter(false)
        }
    }
    return (
        <div>
            <label htmlFor="sort">Sort by: </label>
            <select name="sorter" id="sort" onChange={handleOptionChange} defaultValue="alpha">
                <option value="alpha">Alphabetical Only</option>
                <option value="exclusive">Season-Exclusive First</option>
            </select>
        </div>
    )
}

export default Dropdown
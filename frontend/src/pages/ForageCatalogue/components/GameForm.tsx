import { useState } from "react";
import RadioInput from "./RadioInput";
import { gameRadioAttributes, seasonRadioAttributes } from "../../../data/formInputs";

const GameForm = () => {
    const [formValues, setFormValues] = useState({
        game: "base",
        yearOne: false,
        season: 'Spring'
    });

    // This doesn't work now, need to fix when adding state management lib
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "checkbox") {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.checked,
            });
            console.log(e.target.name, e.target.checked)
        } else {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
            });
            console.log(e.target.name, e.target.value)
        }
    };

    return (
        <form method="get">
            <fieldset className="flex justify-between gap-4">
                <legend>Select a game/mod</legend>
                {
                    gameRadioAttributes.map(attributes => {
                        return (
                            <RadioInput attributes={attributes} handleFormChange={handleFormChange} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
            <div>
                <label htmlFor="yearOne">Show year 1 available only</label>
                <input
                    type="checkbox"
                    id="yearOne"
                    name="yearOne"
                    onChange={handleFormChange}
                />
            </div>
            <fieldset>
                <legend>Select a season</legend>
                {
                    seasonRadioAttributes.map(attributes => {
                        return (
                            <RadioInput attributes={attributes} handleFormChange={handleFormChange} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
        </form>
    );
};

export default GameForm;

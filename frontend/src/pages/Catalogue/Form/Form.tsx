import RadioInput from "./components/RadioInput";
import Checkbox from "./components/Checkbox";
import { gameRadioAttributes, seasonRadioAttributes } from "../../../data/formInputs";

const Form = () => {

    return (
        <form method="get">
            <fieldset className="flex justify-between gap-4">
                <legend>Select a game/mod</legend>
                {
                    gameRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInput attributes={attributes} isChecked={i === 0} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
            <Checkbox id="yearOne" labelText="Show year 1 available only" />
            <fieldset>
                <legend>Select a season</legend>
                {
                    seasonRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInput attributes={attributes} isChecked={i === 0} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
        </form>
    );
};

export default Form;

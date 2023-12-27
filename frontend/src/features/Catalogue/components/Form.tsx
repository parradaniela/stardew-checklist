
import Checkbox from "../../../design-system/Checkbox";
import RadioInput from "../../../design-system/RadioInput";
import { gameRadioAttributes, seasonRadioAttributes } from "../../../data/formInputs";
import RadioInputTab from "../../../design-system/RadioInputTab";

const Form = () => {

    return (
        <form method="get" className="flex flex-col gap-8 w-full">
            <fieldset className="flex justify-center gap-8">
                <legend className="font-stardew text-6xl text-stardew_dark_brown text-center mb-8">Select a game or mod</legend>
                {
                    gameRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInput attributes={attributes} isChecked={i === 0} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
            <Checkbox id="yearOne" labelText="Show year 1 available only" />
            <fieldset className="flex justify-center items-center gap-2">
                <legend className="font-stardew text-6xl text-stardew_dark_brown text-center mb-8">Select a season</legend>
                {
                    seasonRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInputTab attributes={attributes} isChecked={i === 0} key={attributes.id} />
                        )
                    })
                }
            </fieldset>
        </form>
    );
};

export default Form;

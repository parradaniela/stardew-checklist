
import Checkbox from "../../../design-system/Checkbox";
import RadioInput from "../../../design-system/RadioInput";
import { gameRadioAttributes, seasonRadioAttributes } from "../../../data/formInputs";
import RadioInputTab from "../../../design-system/RadioInputTab";

const Form = () => {

    return (
        <form method="get" className="flex flex-col gap-4 w-full bg-stardew_light_cream pt-2 px-6 pb-2 border-8 border-stardew_persian_orange">
            <fieldset className="flex justify-center gap-4">
                <legend className="font-stardew text-6xl text-stardew_dark_brown text-center mb-2">Select a game or mod</legend>
                {
                    gameRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInput attributes={attributes} isChecked={i === 0} key={attributes.id} />
                        )
                    })
                }
                <Checkbox id="yearOne" labelText="Show year 1 available only" />
            </fieldset>
            <fieldset className="flex justify-center items-center gap-2">
                <legend className="font-stardew text-6xl text-stardew_dark_brown text-center mb-2">Select a season</legend>
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

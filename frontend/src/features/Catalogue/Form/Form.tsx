// import Checkbox from "../../../design-system/Checkbox";
import RadioInput from "../../../design-system/RadioInput";
import {
    gameRadioAttributes,
    seasonRadioAttributes,
} from "../../../data/formInputs";
import RadioInputTab from "../../../design-system/RadioInputTab";

const Form = () => {
    return (
        <section>
            <form
                method="get"
                className="flex w-full flex-col gap-4 border-8 border-stardew_persian_orange bg-stardew_light_cream px-6 py-2"
            >
                <fieldset className="flex flex-wrap justify-center gap-4">
                    <legend className="mb-2 text-center font-stardew text-4xl text-stardew_dark_brown lg:text-6xl">
                        Select a game or mod
                    </legend>
                    {gameRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInput
                                attributes={attributes}
                                isChecked={i === 0}
                                key={attributes.id}
                            />
                        );
                    })}
                    {/* <Checkbox id="yearOne" labelText="Show year 1 available only" /> */}
                </fieldset>
                <fieldset className="flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap">
                    <legend className="mb-2 text-center font-stardew text-4xl text-stardew_dark_brown lg:text-6xl">
                        Select a season
                    </legend>
                    {seasonRadioAttributes.map((attributes, i) => {
                        return (
                            <RadioInputTab
                                attributes={attributes}
                                isChecked={i === 0}
                                key={attributes.id}
                            />
                        );
                    })}
                </fieldset>
            </form>
        </section>
    );
};

export default Form;

import {
    gameRadioAttributes,
    seasonRadioAttributes,
} from "../../../data/formInputs";
import RadioInputTab from "../../../design-system/RadioInputTab";
import Section from "../../../design-system/Section";
import FormInput from "./FormInput";

const Form = () => {
    return (
        <Section>
            <form method="get" className="flex w-full flex-col gap-4">
                <fieldset className="flex flex-wrap justify-center gap-4">
                    <legend className="mb-2 text-center font-stardew text-4xl text-stardew_dark_brown lg:text-6xl">
                        Select a game or mod
                    </legend>
                    {gameRadioAttributes.map((attributes, i) => {
                        return (
                            <FormInput attributes={attributes} i={i} />
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
        </Section>
    );
};

export default Form;

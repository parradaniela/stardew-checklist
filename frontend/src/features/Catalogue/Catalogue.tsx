import FormProvider from "../../context/FormContext";
import Form from "./components/Form";
import GridDisplay from "./components/GridDisplay";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-center bg-stardew_light_cream pt-10 px-6 gap-6 border-8 border-stardew_persian_orange">
            <FormProvider>
                <Form />
                <GridDisplay />
            </FormProvider>
        </section>
    );
};

export default ForageCatalogue;

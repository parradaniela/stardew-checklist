import FormProvider from "../../context/FormContext";
import Form from "./components/Form";
import GridDisplay from "./components/GridDisplay";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-between gap-8">
            <FormProvider>
                <Form />
                <GridDisplay />
            </FormProvider>
        </section>
    );
};

export default ForageCatalogue;

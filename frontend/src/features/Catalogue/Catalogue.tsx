import FormProvider from "../../context/FormContext";
import Form from "./Form/Form";
import GridDisplay from "./GridDisplay/GridDisplay";

const ForageCatalogue = () => {
    return (
        <div className="flex flex-col justify-between gap-8">
            <FormProvider>
                <Form />
                <GridDisplay />
            </FormProvider>
        </div>
    );
};

export default ForageCatalogue;

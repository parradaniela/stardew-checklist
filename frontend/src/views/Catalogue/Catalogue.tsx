import DataProvider from "../../context/DataContext";
import Form from "./components/Form";
import GridDisplay from "./components/GridDisplay";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-center gap-10">
            <DataProvider>
                <Form />
                <GridDisplay />
            </DataProvider>
        </section>
    );
};

export default ForageCatalogue;

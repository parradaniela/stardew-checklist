import GameForm from "./components/GameForm";
import FormResults from "./components/FormResults";
import DataProvider from "../../context/DataContext";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-center gap-10">
            <DataProvider>
                <GameForm />
                <FormResults />
            </DataProvider>
        </section>
    );
};

export default ForageCatalogue;

import GameForm from "./components/GameForm";
import FormResults from "./components/FormResults";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-center gap-10">
            <GameForm />
            <FormResults />
        </section>
    );
};

export default ForageCatalogue;

import GameForm from "./components/GameForm";
import ItemDisplay from "./components/ItemDisplay";

const ForageCatalogue = () => {
    return (
        <section className="flex flex-col justify-center gap-10">
            <GameForm />
            <ItemDisplay />
        </section>
    );
};

export default ForageCatalogue;

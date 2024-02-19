import { useContext, useState } from "react";
import ItemCard from "../../../design-system/ItemCard";
import { FormContext } from "../../../context/FormContext";
import { getForage } from "../../../api/getForage";
import { useQuery } from "react-query";
import Toggle from "../../../design-system/Toggle";

const GridDisplay = () => {
    const [greyout, setGreyout] = useState(false);
    const { formValues } = useContext(FormContext);

    const { isLoading, isError, error, data } = useQuery(
        ["forage", formValues],
        getForage,
    );

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{`An error has occurred: ${error}`}</p>;

    return (
        <section className=" border-8 border-stardew_persian_orange bg-stardew_light_cream px-6 pb-2 pt-2">
            <Toggle labelText="Dim year-round items" id="greyout" greyout={greyout} setter={setGreyout} />
            <ul className="grid grid-cols-5 gap-2">
                {data?.map((dbObject) => {
                    return <ItemCard key={dbObject.name} itemObj={dbObject} greyout={greyout} />;
                })}
            </ul>
        </section>
    );
};

export default GridDisplay;

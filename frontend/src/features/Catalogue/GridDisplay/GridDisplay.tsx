import { useContext, useState } from "react";
import { FormContext } from "../../../context/FormContext";
import { getForage } from "../../../api/getForage";
import { useQuery } from "react-query";
// Component imports
import ItemCard from "../../../design-system/ItemCard";
import Toggle from "../../../design-system/Toggle";
import Loading from "./Loading";
import Error from "./Error";
import Section from "../../../design-system/Section";
import Dropdown from "../../../design-system/Dropdown";
import { DbData } from "../../../types/types";

const GridDisplay = () => {
    const [greyout, setGreyout] = useState(false);
    const [sortExclusive, setSortExclusive] = useState(false);
    const { formValues } = useContext(FormContext);

    const { isLoading, isError, error, data } = useQuery(
        ["forage", formValues],
        getForage,
    );

    if (isLoading) return <Loading />;
    if (isError) return <Error error={error} />;

    const sortedData = data?.toSorted((a: DbData, b: DbData) => {
        return a.seasons.length - b.seasons.length;
    });

    return (
        <Section>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
                <Toggle
                    labelText="Dim year-round items"
                    id="greyout"
                    greyout={greyout}
                    setter={setGreyout}
                />
                <Dropdown state={sortExclusive} setter={setSortExclusive} />
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-0 md:grid-cols-3 lg:grid-cols-5">
                {sortExclusive
                    ? sortedData?.map((dbObject) => {
                          return (
                              <ItemCard
                                  key={dbObject.name}
                                  itemObj={dbObject}
                                  greyout={greyout}
                              />
                          );
                      })
                    : data?.map((dbObject) => {
                          return (
                              <ItemCard
                                  key={dbObject.name}
                                  itemObj={dbObject}
                                  greyout={greyout}
                              />
                          );
                      })}
            </ul>
        </Section>
    );
};

export default GridDisplay;

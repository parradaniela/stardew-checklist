import { useContext } from "react";
import ItemCard from "../../../design-system/ItemCard";
import { FormContext } from "../../../context/FormContext";
import { getForage } from "../../../api/getForage";
import { useQuery } from "react-query";

const GridDisplay = () => {
    const { formValues } = useContext(FormContext)

    const { isLoading, isError, error, data } = useQuery(['forage', formValues], getForage);

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{`An error has occurred: ${error}`}</p>
    return (
        <div>
            <ul className='grid grid-cols-5 gap-2 bg-stardew_light_cream pt-2 px-6 pb-2 border-8 border-stardew_persian_orange'>
                {
                    data?.map(dbObject => {
                        return (
                            <ItemCard key={dbObject.name} itemObj={dbObject} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default GridDisplay
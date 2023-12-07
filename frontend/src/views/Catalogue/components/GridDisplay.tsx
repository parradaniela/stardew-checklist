import { useContext } from "react";
import ItemCard from "../../../components/ItemCard";
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
            <ul className='grid grid-cols-5 gap-2'>
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
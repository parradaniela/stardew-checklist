import { useContext, useEffect } from "react";
import ItemCard from "../../../components/ItemCard";
import { DataContext } from "../../../context/DataContext";
import getRequest from "../../../utils/getRequest";

const GridDisplay = () => {
    const { formValues, dbResponse, setDbResponse } = useContext(DataContext)
    useEffect(() => {
        getRequest(formValues)
            .then(data => {
                setDbResponse(data)
            })
            .catch(error => {
                console.log("Error fetching update DB data", error)
            })
    }, [formValues, setDbResponse])

    return (
        <div>
            <ul className='grid grid-cols-5 gap-2'>
                {
                    dbResponse.map(dbObject => {
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
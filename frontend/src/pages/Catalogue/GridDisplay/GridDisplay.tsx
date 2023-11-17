import { useContext } from "react";
import ItemCard from "./components/ItemCard";
import { DataContext } from "../../../context/DataContext";

const GridDisplay = () => {
    const { dbResponse } = useContext(DataContext)

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
import { ForageObj } from "../../../types/types";
import ItemCard from "./ItemCard";

const FormResults = () => {
    const testItems: ForageObj[] = [{
        "name": "Wild Horseradish",
        "imgUrl": "image.url",
        "wikiUrl": "https://stardewvalleywiki.com/Wild_Horseradish",
        "locations": [
            "Secret Woods (52%)",
            "Cindersap Forest (50%)",
            "Backwoods (42%)",
            "Mountain (42%)",
            "Forest Farm (25%)"
        ]
    },
    {
        "name": "Daffodil",
        "imgUrl": "image.url",
        "wikiUrl": "https://stardewvalleywiki.com/Daffodil",
        "locations": [
            "Pelican Town (100%)",
            "Bus Stop (45%)",
            "Railroad (45%)"
        ]
    },
    ];
    return (
        <div>
            <ul className='grid grid-flow-col gap-2'>
                {
                    testItems.map(testItem => {
                        return (
                            <ItemCard key={testItem.name} itemObj={testItem} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FormResults
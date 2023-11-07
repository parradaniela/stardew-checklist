import * as Tabs from '@radix-ui/react-tabs';
import ItemCard from './ItemCard';

export type ForageObj = {
    name: string,
    imgUrl: string,
    wikiUrl: string,
    locations: string[]
}
const ItemDisplay = () => {
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
    const tabHeadings = ['Spring', 'Summer', 'Fall', 'Winter'];
    return (
        <Tabs.Root defaultValue="Spring" >
            <Tabs.List aria-label="Select a Season" className='flex justify-between'>
                {
                    tabHeadings.map(heading => {
                        return (
                            <Tabs.Trigger
                                key={heading}
                                value={heading}
                                className='border p-4'
                            >
                                {heading}
                            </Tabs.Trigger>
                        )
                    })
                }
            </Tabs.List>
            <Tabs.Content value="Spring">
                <ul className='grid grid-flow-col gap-2'>
                    {
                        testItems.map(testItem => {
                            return (
                                <ItemCard key={testItem.name} itemObj={testItem} />
                            )
                        })
                    }

                </ul>
            </Tabs.Content>
            <Tabs.Content value="Summer">
                <p>Summer data here</p>
            </Tabs.Content>
            <Tabs.Content value="Fall">
                <p>Fall data here</p>
            </Tabs.Content>
            <Tabs.Content value="Winter">
                <p>Winter data here</p>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default ItemDisplay
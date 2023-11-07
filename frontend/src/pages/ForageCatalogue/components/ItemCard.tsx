import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { ForageObj } from "./ItemDisplay";

type Props = {
    itemObj: ForageObj;
};
const ItemCard = ({ itemObj }: Props) => {
    const { name, imgUrl, wikiUrl, locations } = itemObj;
    return (
        <li className="rounded-md border p-4">
            <div className="flex gap-2">
                <div>
                    <img src={imgUrl} alt={name} />
                </div>
                <h2>{name}</h2>
            </div>
            <div>
                <Accordion.Root type="single" collapsible>
                    <Accordion.Item value="item-1">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <p className="sr-only">Click to read more</p>
                                <ChevronDownIcon aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <ul className="list-inside list-disc">
                                {locations.map((location, i) => {
                                    return <li key={i}>{location}</li>;
                                })}
                            </ul>
                            <div>
                                <a
                                    href={wikiUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-2"
                                >
                                    <span>View on the Wiki</span>
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </li>
    );
};

export default ItemCard;

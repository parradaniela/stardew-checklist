import Image from "./Image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { ForageObj } from "../types/types";
import { useState } from "react";

type Props = {
    itemObj: ForageObj;
};
const ItemCard = ({ itemObj }: Props) => {
    const { name, imgId, wikiUrl, locations } = itemObj;
    const [chevronRotate, setChevronRotate] = useState(false);

    const handleChevronRotate = () => {
        setChevronRotate((prevChevronRotate) => !prevChevronRotate);
    };
    return (
        <li className="rounded-md border-4 border-stardew_persian_orange p-4">
            <div>
                <Accordion.Root type="single" collapsible>
                    <Accordion.Item value="item-1">
                        <Accordion.Header>
                            <Accordion.Trigger
                                className="flex w-full flex-col justify-center gap-2"
                                onClick={handleChevronRotate}
                            >
                                <div className="flex items-center justify-between gap-4 pb-2">
                                    <div>
                                        <Image imgId={imgId} />
                                    </div>
                                    <h2 className="text-lg font-bold">
                                        {name}
                                    </h2>
                                </div>
                                <div className="self-center">
                                    <span className="sr-only">
                                        Click here to see more details
                                    </span>
                                    <ChevronDownIcon
                                        aria-hidden
                                        className={`scale-150 transition-all ${
                                            chevronRotate ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="flex flex-col text-lg transition-all">
                            <ul className="ml-4 list-outside list-disc transition-all">
                                {locations.map((location, i) => {
                                    return <li key={i}>{location}</li>;
                                })}
                            </ul>
                            <div>
                                <a
                                    href={wikiUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group mt-4 flex items-center gap-2 border-4 border-stardew_persian_orange bg-stardew_sunset p-2 transition-all hover:-translate-y-1"
                                >
                                    <span>View on the Wiki</span>
                                    <ExternalLinkIcon className="transition-all delay-100 group-hover:scale-150" />
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

import Image from "./Image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { DbData } from "../types/types";
import { useState } from "react";

type Props = {
    itemObj: DbData;
    greyout: boolean;
};
const ItemCard = ({ itemObj, greyout }: Props) => {
    const { name, imgId, wikiUrl, locations, seasons } = itemObj;
    const [accordionToggle, setAccordionToggle] = useState(false);

    const handleAccordionToggle = () => {
        setAccordionToggle((prevAccordionToggle) => !prevAccordionToggle);
    };

    return (
        <li
            className={`rounded-md border-4 transition-all ${
                greyout && seasons.length === 4
                    ? "border-gray-500 bg-gray-400 opacity-90 focus-within:bg-gray-300 hover:bg-gray-300"
                    : "border-stardew_persian_orange focus-within:bg-orange-100 hover:bg-orange-100"
            } p-4`}
        >
            <div>
                <Accordion.Root type="single" collapsible>
                    <Accordion.Item value="item-1">
                        <Accordion.Header>
                            <Accordion.Trigger
                                className="flex w-full flex-col justify-center gap-2"
                                onClick={handleAccordionToggle}
                            >
                                <div className="flex items-center justify-between gap-4 pb-2">
                                    <div>
                                        <Image
                                            imgId={imgId}
                                            greyscale={
                                                greyout && seasons.length === 4
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>
                                    <h2 className="text-lg font-bold">
                                        {name}
                                    </h2>
                                </div>
                                <div className="flex flex-col items-center gap-1 self-center">
                                    <span>
                                        {`${
                                            accordionToggle
                                                ? "Close locations"
                                                : "View locations"
                                        }`}
                                    </span>
                                    <ChevronDownIcon
                                        aria-hidden
                                        className={`scale-150 transition-all ${
                                            accordionToggle ? "rotate-180" : ""
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
                                    className={`group mt-4 flex items-center gap-2 border-4 ${
                                        greyout && seasons.length === 4
                                            ? "border-gray-600 bg-gray-400"
                                            : "border-stardew_persian_orange bg-orange-200"
                                    } p-2 transition-all hover:-translate-y-1`}
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

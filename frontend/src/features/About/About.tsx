import Heading from "../../design-system/Heading";
import Paragraph from "../../design-system/Paragraph";
import Section from "../../design-system/Section";

const About = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4">
            <Section>
                <Heading>What's This?</Heading>
                <Paragraph>
                    The Stardew Valley Forage Catalogue is a visual reference
                    tool for the game Stardew Valley. You can use it to find
                    items catalogued as "forage" in the base game as well as two
                    popular mods: Stardew Valley Expanded and Ridgeside Village.
                </Paragraph>
            </Section>

            <Section>
                <Heading>Why this Tool?</Heading>
                <Paragraph>
                    If you're anything like me, you've installed a hilarious
                    number of mods into your game that add several new items,
                    and never keep track of what you've collected.
                </Paragraph>
                <Paragraph>
                    You can use the{" "}
                    <a
                        href="https://www.nexusmods.com/stardewvalley/mods/541"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Lookup Anything mod
                    </a>
                    , but now you have to check each individual item that you're
                    missing to see if you can find it in your current in-game
                    season. Alternatively, you now have the insurmountable task
                    of checking 3+ wikis to find the information you're looking
                    for.
                </Paragraph>
                <Paragraph>
                    If this describes your trials and tribulations, worry not,
                    this tool helps to centralize this information in one page
                    to save you all those clicks!
                </Paragraph>
            </Section>
            <Section>
                <Heading>Where Does the Data Come From?</Heading>
                <Paragraph>
                    All information and images have been sourced from the{" "}
                    <a
                        href="https://stardewvalleywiki.com/Stardew_Valley_Wiki"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Stardew Valley Wiki
                    </a>
                    , the{" "}
                    <a
                        href="https://stardew-valley-expanded.fandom.com/wiki/Stardew_Valley_Expanded_Wiki"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Stardew Valley Expanded Wiki
                    </a>
                    , and the{" "}
                    <a
                        href="https://ridgeside.fandom.com/wiki/Ridgeside_Village_Wiki"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        Ridgeside Village Wiki
                    </a>
                    . Each item in the catalogue comes with a direct link to its
                    wiki page, so you can check the source directly if you
                    prefer!
                </Paragraph>
                <Paragraph>
                    The adorable font is courtesy of{" "}
                    <a
                        href="https://www.reddit.com/user/Cowsplay/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        u/Cowsplay
                    </a>{" "}
                    and can be found in{" "}
                    <a
                        href="https://www.reddit.com/r/StardewValley/comments/4dtgp7/by_popular_request_a_stardew_valley_font_for_your/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline"
                    >
                        this reddit post
                    </a>
                    .
                </Paragraph>
            </Section>
        </div>
    );
};

export default About;

import Heading from "../../design-system/Heading";
import Paragraph from "../../design-system/Paragraph";
import Section from "../../design-system/Section";

const About = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4 text-center">
            <Section>
                <Heading>What's This?</Heading>
                <Paragraph>The Stardew Valley Forage Catalogue is a visual reference tool for the game Stardew Valley (SV). You can use it to find items catalogued as "forage" in the base game as well as two popular mods.</Paragraph>
            </Section>

            <Section>
                <div className="flex flex-col gap-4">
                    <Heading>Why this Tool?</Heading>
                    <p className="text-2xl">If you're anything like me, you've installed a hilarious number of mods into your game that add a bunch of new items, and never keep track of what you've collected.</p>
                    <Paragraph>You can use the <a href="https://www.nexusmods.com/stardewvalley/mods/541" target="_blank" rel="noreferrer noopener" className="underline">Lookup Anything mod</a> (or you should install it if you haven't, it's amazing!), but now you have to check each individual item that you're missing to see if you can find it in your current in-game season. And you don't want to have to check multiple wikis for the information either.</Paragraph>
                    <Paragraph>If this describes your trials and tribulations, worry not, for this tool helps to centralize this information in one page to save you all those clicks!</Paragraph>
                </div>
            </Section>
        </div>
    );
};

export default About;

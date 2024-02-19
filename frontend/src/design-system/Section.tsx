import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Section = ({ children }: Props) => {
    return (
        <section className="border-8 border-stardew_persian_orange bg-stardew_light_cream px-3 py-1 md:px-6 md:py-2">
            {children}
        </section>
    );
};

export default Section;

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Heading = ({ children }: Props) => {
    return (
        <h2 className="font-stardew text-5xl text-stardew_dark_brown">
            {children}
        </h2>
    );
};

export default Heading;

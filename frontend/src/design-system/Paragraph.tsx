import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Paragraph = ({ children }: Props) => {
    return <p className="text-2xl">{children}</p>;
};

export default Paragraph;

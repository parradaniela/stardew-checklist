import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Paragraph = ({ children }: Props) => {
    return <p className="text-xl mt-4">{children}</p>;
};

export default Paragraph;

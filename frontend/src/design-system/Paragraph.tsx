import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Paragraph = ({ children }: Props) => {
    return <p className="mt-4 text-xl">{children}</p>;
};

export default Paragraph;

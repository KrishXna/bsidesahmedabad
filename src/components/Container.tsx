import React, { PropsWithChildren } from "react";

type Props = {
    fluid?: boolean;
    className?: string;
};

export const Container = ({ children, className = "", fluid = false }: PropsWithChildren & Props) => {
    return <div className={`px-4 w-full mx-auto ${fluid ? "" : "max-w-7xl"} ${className}`}>{children}</div>;
};

export default Container;

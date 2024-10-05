import { createElement, FC, ReactNode } from "react";
import styles from "./title.module.scss";

const titleSizes = {
    "xl": "h1",
    "l": "h2",
    "m": "h3",
    "s": "h4",
    "xs": "p"
};

interface TitleProps {
    size: "xl" | "l" | "m" | "s" | "xs";
    variant?: "primary" | "dark" | "light";
    children: ReactNode;
    className?: string;
}

const Title: FC<TitleProps> = ({ size, variant = "primary", children, className }) => {
    return createElement(titleSizes[size], {
        className: `
            ${styles.title}
            ${className}
            ${variant === "dark" ? styles.dark : ""} 
            ${variant === "primary" ? styles.primary : ""} 
            ${variant === "light" ? styles.light : ""}
        `,
        children: children
    })
};

export default Title;
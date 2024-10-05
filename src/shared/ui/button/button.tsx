import { DetailedHTMLProps, FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: "transparent" | "dark" | "primary";
    type?: "button" | "reset" | "submit";
}

const Button: FC<ButtonProps> = ({ variant = "dark", children, onClick, className, type = "button" }) => {
    return (
        <button
            className={
                `
                ${variant === "transparent" ? styles.transparent : ""}
                ${variant === "dark" ? styles.dark : ""}
                ${variant === "primary" ? styles.primary : ""}
                ${styles.button}
                ${className}
                `
            }
            onClick={onClick}
            type={type}
        >{children}</button>
    )
};

export default Button;
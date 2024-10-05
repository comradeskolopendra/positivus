import { ChangeEvent, Dispatch, FC, SetStateAction, useId } from "react";
import styles from "./input.module.scss";
import type { IContactForm } from "@/shared/types/util-types";

interface InputProps {
    label?: string;
    required?: boolean;
    value: string;
    setValue: Dispatch<SetStateAction<IContactForm>>;
    size?: "l" | "m";
    variant?: "black" | "white";
    placeholder: string;
    className?: string;
}

const Input: FC<InputProps> = ({ label, placeholder, required, value, setValue, size = "m", variant = "white", className = "" }) => {
    const id = useId();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setValue((prev) => ({
            ...prev,
            [name.toLowerCase()]: value
        }));
    };

    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label + (required ? "*" : "")}</label>}
            {size === "m" ?
                <input
                    type="text"
                    className={`
                        ${styles.input}
                        ${variant === "white" ? styles.whiteInput : ""}
                        ${variant === "black" ? styles.blackInput : ""}
                        ${className}
                        `}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    name={label}
                    id={id}
                    placeholder={placeholder}
                />
                :
                <textarea
                    className={`
                        ${styles.textarea}
                        ${variant === "white" ? styles.whiteInput : ""}
                        ${variant === "black" ? styles.blackInput : ""}
                        ${className}
                        `}
                    value={value}
                    onChange={handleChange}
                    name={label}
                    required={required}
                    id={id}
                    placeholder={placeholder}
                />
            }
        </div>
    );
};

export default Input;
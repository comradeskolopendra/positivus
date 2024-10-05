import { IContactForm } from "@/shared/types/util-types";
import { ChangeEvent, Dispatch, FC, SetStateAction, useId } from "react";
import styles from "./radio.module.scss";

interface RadioProps {
    label: string;
    name: string;
    defaultChecked?: boolean;
    setValue: Dispatch<SetStateAction<IContactForm>>
}

const Radio: FC<RadioProps> = ({ name, label, defaultChecked, setValue }) => {
    const id = useId();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setValue((prev) => ({
            ...prev,
            [name]: label
        }))
    };

    return (
        <label className={styles.wrapper} htmlFor={id}>
            <input
                type="radio"
                name={name}
                id={id}
                className={styles.input}
                defaultChecked={defaultChecked}
                onChange={handleChange}
            />

            <span className={styles.state} />

            {label}
        </label>
    )
};

export default Radio;
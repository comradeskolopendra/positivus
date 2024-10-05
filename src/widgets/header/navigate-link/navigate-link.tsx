
import { FC, ReactNode } from "react";
import styles from "./navigate-link.module.scss";

interface NavigateLinkProps {
    children: ReactNode;
}

const NavigateLink: FC<NavigateLinkProps> = ({ children }) => {

    return (
        <a className={styles.link}>
            {children}
        </a>
    )
};

export default NavigateLink;
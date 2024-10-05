import { DeviceTrackingState } from "@/entities";
import type { CardProps } from "@/shared/types/util-types";
import { Link } from "@/shared/ui";
import { observer } from "mobx-react";
import { FC } from "react";
import styles from "./card.module.scss";

const Card: FC<CardProps> = observer(({ variant = "dark", title, image, to }) => {
    const { isMobile } = DeviceTrackingState;

    return (
        <article
            className={`
                ${styles.card}
                ${variant === "dark" ? styles.darkCard : ""}
                ${variant === "primary" ? styles.primaryCard : ""}
                ${variant === "light" ? styles.lightCard : ""}
            `}
        >
            <div className={styles.text}>
                <div>
                    {title}
                </div>

                <Link
                    rounded
                    to={to}
                    arrowIconVariant={variant === "dark" ? "dark" : "primary"}
                    textVariant={variant === "dark" ? "light" : "dark"}
                    backgroundVariant={variant === "dark" ? "light" : "dark"}
                >
                    {isMobile ? "" : "Learn More"}
                </Link>
            </div>

            <div>
                <img src={image} alt="" className={styles.image} />
            </div>
        </article>
    )
});

export default Card;
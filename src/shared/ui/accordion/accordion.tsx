import type { IAccordionItem } from "@/shared/types/util-types";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./accordion.module.scss";

import { DeviceTrackingState } from "@/entities";
import { observer } from "mobx-react";
import { MinusIcon, PlusIcon } from "../icons/icons";


interface AccordionProps {
    items: IAccordionItem[];
    activeIndex?: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
}

const Accordion: FC<AccordionProps> = observer(({ items, activeIndex = 0, setActiveIndex }) => {
    const { isMobile } = DeviceTrackingState;

    return (
        <section className={styles.accordion}>
            {items.map((element, idx) => (
                <section
                    className={`${styles.item} ${activeIndex === idx ? styles.active : ""}`}
                    onClick={() => setActiveIndex(idx)}
                    key={idx}
                >
                    <div className={styles.heading}>
                        <div className={styles.text}>
                            <p className={styles.number}>{idx < 10 ? `0${idx + 1}` : idx + 1}</p>
                            {isMobile ? <h4>{element.title}</h4> : <h3>{element.title}</h3>}
                        </div>

                        {activeIndex === idx ? <MinusIcon /> : <PlusIcon />}
                    </div>

                    <div className={`${styles.defaultContent} ${activeIndex === idx ? styles.activeContent : ""}`}>
                        <div className={styles.border} />
                        <div className={styles.content}>
                            <p>{element.paragraph}</p>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    )
});

export default Accordion;
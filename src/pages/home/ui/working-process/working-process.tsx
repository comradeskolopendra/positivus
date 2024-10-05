import { Accordion, Title } from "@/shared/ui";
import { useState } from "react";
import type { IAccordionItem } from "@/shared/types/util-types";
import styles from "./working-process.module.scss";

const WorkingProcess = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const items: IAccordionItem[] = [
        {
            title: "Consultation",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Research and Strategy Development",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Implementation",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Monitoring and Optimization",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Reporting and Communication",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Continual Improvement",
            paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
    ];

    return (
        <section>
            <div className={styles.text}>
                <Title variant="primary" size="l">Our Working Process</Title>

                <p>Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>

            <section className={styles.content}>
                <Accordion
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    items={items}
                />
            </section>
        </section>
    )
};

export default WorkingProcess;
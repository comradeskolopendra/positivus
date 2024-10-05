import { Title } from "@/shared/ui";
import styles from "./case-studies.module.scss";

import { Banner } from "./ui";

const CaseStudies = () => {
    return (
        <section className={styles.caseStudies}>
            <div className={styles.text}>
                <Title size="l" variant="primary">Case Studies</Title>

                <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>

            <Banner />
        </section>
    )
};

export default CaseStudies;
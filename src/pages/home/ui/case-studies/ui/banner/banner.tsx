import { Link } from "@/shared/ui";

import styles from "./banner.module.scss";

const Banner = () => {

    return (
        <section className={styles.banner}>
            <div className={styles.item}>
                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                <Link to={"#"} arrowIconVariant="primary" textVariant="primary">Learn more</Link>
            </div>
            <div className={styles.divider} />
            <div className={styles.item}>
                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                <Link to={"#"} arrowIconVariant="primary" textVariant="primary">Learn more</Link>
            </div>
            <div className={styles.divider} />
            <div className={styles.item}>
                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                <Link to={"#"} arrowIconVariant="primary" textVariant="primary">Learn more</Link>
            </div>
        </section>
    );
};

export default Banner;
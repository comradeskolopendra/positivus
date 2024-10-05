import { Title } from "@/shared/ui";
import { Swiper } from "./ui";

import styles from "./testimonials.module.scss";

const Testimonials = () => {

    return (
        <section className={styles.testimonials}>
            <div className={styles.text}>
                <Title size="l" variant="primary">Testimonials</Title>
                <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>

            <Swiper />
        </section>
    )
};

export default Testimonials;
import { Title } from "@/shared/ui";
import styles from "./contact-us.module.scss"
import { ContactForm } from "@/features";

const ContactUs = () => {

    return (
        <section className={styles.contactUs}>
            <div className={styles.text}>
                <Title size="l" variant="primary">Contact Us</Title>

                <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>

            <ContactForm />
        </section>
    )
};

export default ContactUs;
import { DeviceTrackingState } from "@/entities";
import heroImage from "./assets/hero-image.png";
import styles from "./hero.module.scss";
import { Button } from "@/shared/ui";
import { observer } from "mobx-react";

const Hero = observer(() => {
    const { isMobile } = DeviceTrackingState;

    return (
        <section className={styles.hero}>
            <div className={styles.info}>
                <h1>Navigating the digital landscape for success</h1>
                {isMobile && <img src={heroImage} className={styles.image} alt="" />}
                <p className={styles.description}>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <Button variant="dark">Book a consultation</Button>
            </div>

            {!isMobile && <img src={heroImage} alt="" />}
        </section>
    )
});

export default Hero;
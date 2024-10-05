import { useCallback, useRef } from 'react';

import { A11y, Autoplay, Pagination } from 'swiper/modules';
import styles from "./swiper.module.scss";

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { DeviceTrackingState } from '@/entities';

import dekstopFrame from "./assets/desktop-frame.png";
import mobileFrame from "./assets/mobile-frame.png";

import 'swiper/css';
import "swiper/css/a11y";
import "swiper/css/pagination";

const CustomSwiper = () => {
    const { isMobile } = DeviceTrackingState;

    const swiperRef = useRef<SwiperClass>();

    const handleNext = useCallback(() => {
        swiperRef.current.slideNext();
    }, [])

    const handlePrev = useCallback(() => {
        swiperRef.current.slidePrev();
    }, [])

    return (
        <Swiper
            modules={[A11y, Pagination, Autoplay]}
            slidesPerView={1}
            breakpoints={{
                1240: { slidesPerView: 2 }
            }}
            spaceBetween={50}
            navigation
            pagination={{
                renderBullet(index, className) {
                    return (`<svg class="${className}" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white" />
                    </svg>`)
                },
                bulletActiveClass: styles.active,
                bulletClass: styles.bullet
            }}
            loop={true}
            centeredSlides={true}
            className={styles.swiper}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            {[1, 2, 3, 4].map((element) => (
                <SwiperSlide className={styles.slide} key={element}>
                    <div>
                        <div className={styles.content} style={{
                            backgroundImage: isMobile ? `url(${mobileFrame})` : `url(${dekstopFrame})`
                        }}>
                            <p className={styles.description}>
                                "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                            </p>
                        </div>

                        <p className={styles.name}>
                            <span>John Smith</span>
                            <br />
                            Marketing Director at XYZ Corp
                        </p>
                    </div>
                </SwiperSlide>
            ))}


            <div className={styles.controls}>
                {/* left */}
                <button onClick={handlePrev} className={styles.changeSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" fill="white" />
                    </svg>
                </button>

                {/* right */}
                <button onClick={handleNext} className={styles.changeSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" fill="white" />
                    </svg>
                </button>
            </div>
        </Swiper>
    )
}

export default CustomSwiper;

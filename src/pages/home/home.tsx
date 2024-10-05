import { useEffect } from "react";
import { Layout } from "../hocs/index";
import styles from "./home.module.scss"
import {
    Hero,
    Companies,
    Services,
    GetProposal,
    CaseStudies,
    WorkingProcess,
    Team,
    Testimonials,
    ContactUs
} from "./ui";

import { HomeState } from "@/entities";

const Home = () => {
    const { getEmployees, getServices } = HomeState;

    useEffect(() => {
        getEmployees();
        getServices();
    }, [])

    return (
        <Layout isNeedFooter isNeedHeader>
            <div className={styles.wrapper}>
                <Hero />
                <Companies />
                <Services />
                <GetProposal />
                <CaseStudies />
                <WorkingProcess />
                <Team />
                <Testimonials />
                <ContactUs />
            </div>
        </Layout>
    )
};

export default Home;
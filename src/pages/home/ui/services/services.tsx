import { observer } from "mobx-react";

import { Title } from "@/shared/ui";
import { Card } from "./ui";
import { HomeState } from "@/entities";

import styles from "./services.module.scss";
import Skeleton from "@/shared/ui/skeleton/skeleton";

const Services = observer(() => {
    const { services: { data, isError, isLoading } } = HomeState;

    return (
        <section>
            <div className={styles.text}>
                <Title size="l" variant="primary">
                    Services
                </Title>

                <p>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
            </div>

            <section className={styles.cards}>
                {(isLoading || isError) && Array(6).fill(undefined).map((_, idx) => <Skeleton key={idx} className={styles.skeleton} isError={isError} />)}
                {!isError && !isLoading && data.map((card, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={
                                <>
                                    {card
                                        .name
                                        .split("*")
                                        .map(
                                            (element) => (<Title key={Math.random()} variant={card.titleVariant} size="m">{element}</Title>)
                                        )
                                    }
                                </>
                            }
                            image={card.image}
                            to={card.link}
                            variant={card.variant}
                        />
                    )
                })}
            </section>
        </section>
    )
});

export default Services;
import { Button, Title } from "@/shared/ui";
import { Card } from "./ui";
import styles from "./team.module.scss";
import { observer } from "mobx-react";
import { HomeState } from "@/entities";
import Skeleton from "@/shared/ui/skeleton/skeleton";

const Team = observer(() => {
    const { employes: { data, isLoading, isError } } = HomeState;

    return (
        <section className={styles.team}>
            <div className={styles.text}>
                <Title size="l" variant="primary">Team</Title>

                <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>

            <section className={styles.employees}>
                {(isLoading || isError) && Array(6).fill(undefined).map((_, idx) => (<Skeleton key={idx} className={styles.skeleton} isError={isError} />))}
                {!isLoading && !isError && data.map((element, idx) => (
                    <Card
                        key={idx}
                        {...element}
                    />
                ))}
            </section>

            <Button className={styles.allTeam}>See all team</Button>
        </section>
    )
});

export default Team;
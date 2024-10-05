import { FC } from "react";
import styles from "./skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    isError?: boolean;
}

const Skeleton: FC<SkeletonProps> = ({ className, isError }) => {

    return (
        <div className={`${className} ${styles.skeleton}`}>
            {isError && <h3 className={styles.error}>Something went wrong <br /> <span>:(</span></h3>}
        </div>
    )
};

export default Skeleton;
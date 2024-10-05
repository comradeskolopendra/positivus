import { Footer, Header } from "@/widgets";
import { observer } from "mobx-react";
import { FC, ReactNode } from "react";
import styles from "./layout.module.scss";
import Menu from "@/widgets/menu/menu";

interface LayoutProps {
    isNeedHeader?: boolean;
    isNeedFooter?: boolean;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = observer(({ isNeedFooter = false, isNeedHeader = false, children }) => {

    return (
        <>
            {isNeedHeader && <Header />}

            <main className={styles.main}>
                {children}
            </main>

            {isNeedFooter && <Footer />}

            <Menu />
        </>
    )
});

export default Layout;
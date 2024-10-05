
import { Logo } from "@/shared/ui";
import menu from "./assets/menu.png";
import styles from "./header.module.scss";
import NavigateLink from "./navigate-link/navigate-link";
import { Button } from "@/shared/ui";
import { MenuState } from "@/entities";
import { observer } from "mobx-react";

const Header = observer(() => {
    const { openMenu } = MenuState;

    return (
        <header className={styles.header}>
            <Logo color="black" />

            <nav className={styles.navigate}>
                <NavigateLink>About us</NavigateLink>
                <NavigateLink>Services</NavigateLink>
                <NavigateLink>Use Cases</NavigateLink>
                <NavigateLink>Pricing</NavigateLink>
                <NavigateLink>Blog</NavigateLink>

                <Button variant="transparent">Request a quote</Button>
            </nav>

            <button className={styles.menu} onClick={openMenu}>
                <img src={menu} alt="" />
            </button>
        </header>
    )
});

export default Header;
import { MenuState } from "@/entities";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import styles from "./menu.module.scss";
import { Button } from "@/shared/ui";

const Menu = observer(() => {
    const { isOpen, closeMenu } = MenuState;
    const [menuStyles, setMenuStyles] = useState([styles.menu]);

    useEffect(() => {
        if (isOpen) {
            console.log("start", isOpen)
            setTimeout(() => {
                setMenuStyles(prev => [...prev, styles.activeMenu]);
                document.body.style.overflowY = "hidden";
            }, 150)
        } else {
            setTimeout(() => {
                setMenuStyles(prev => [...prev].filter(style => style !== styles.activeMenu));
                document.body.style.overflowY = "scroll";
            }, 150)
        }
    }, [isOpen])

    return (
        <menu className={menuStyles.join(" ")}>
            <a href="#" className={styles.link}>About us</a>
            <a href="#" className={styles.link}>Services</a>
            <a href="#" className={styles.link}>Use Cases</a>
            <a href="#" className={styles.link}>Pricing</a>
            <a href="#" className={styles.link}>Blog</a>

            <Button variant="dark" onClick={closeMenu}>
                Close
            </Button>
        </menu>
    )
});

export default Menu;
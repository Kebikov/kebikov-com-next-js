import styles from './Burger.module.scss';
import { FC } from "react";


interface IBurger {
    activeMenu: boolean;
    onClick: () => void;
}


const Burger: FC<IBurger> = ({
    activeMenu,
    onClick
}) => {
    return(
        <div className={activeMenu ? `${styles.burger} active` : styles.burger}>
            <div className={activeMenu ? `${styles.burger__body} active` : styles.burger__body} onClick={onClick}>
                <div className={styles.burger__line} />
            </div>
        </div>
    )
}

export default Burger;
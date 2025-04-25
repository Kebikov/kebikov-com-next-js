import styles from './Burger.module.scss';
import { FC } from "react";
import clsx from 'clsx';


interface IBurger {
    activeMenu: boolean;
    onClick: () => void;
}


const Burger: FC<IBurger> = ({
    activeMenu,
    onClick
}) => {
    return(
        <div className={clsx(styles.burger, activeMenu && styles.burgerActive)}>
            <div className={activeMenu ? `${styles.burger__body} active` : styles.burger__body} onClick={onClick}>
                <div className={styles.burger__line} />
            </div>
        </div>
    )
}

export default Burger;
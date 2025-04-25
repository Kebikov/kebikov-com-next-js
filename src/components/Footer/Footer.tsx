import styles from './Footer.module.scss';
import clsx from 'clsx';


const Footer = () => {

    return(
        <footer className={styles.footer}>
            <div className={styles.icon}>
                <a href={"tel:+375296949843"} className={clsx(styles.link, styles.tel)} />
                <a href={"http://instagram.com/_u/kebikov"} className={clsx(styles.link, styles.instagram)} />
                <a href={"viber://chat?number=%2B375296949843"} className={clsx(styles.link, styles.viber)} />
                <a href={"https://t.me/Eugene_Ghionis"} className={clsx(styles.link, styles.telegram)} />
            </div>
            <h2 className={styles.text}>
                © свадебный фотограф Евгений Кебиков | Минск, Европа
            </h2>
        </footer>
    )
}

export default Footer;
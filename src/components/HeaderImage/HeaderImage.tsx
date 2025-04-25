import styles from './HeaderImage.module.scss';
import clsx from 'clsx';
import MainImage from '../MainImage/MainImage';

const HeaderImage = () => {

    return(
        <div className={styles.headerImage}>
            <div className={styles.headerImage__body}>
                <MainImage/>
                <Hello/>
            </div>
        </div>
    )
};


const Hello = () => {

    return(
        <div className={styles.hello} >
            <div className={styles.hello__body}>
                <div className={styles.hello__hi} >
                    ПРИВЕТ !
                </div>
                <h1 className={clsx(styles.hello__I, styles.hi_text)} >
                    Я - Евгений - свадебный фотограф в Минске!
                </h1>
                <div className={clsx(styles.hello__text, styles.hi_text)} >
                    <p>
                        Вот уже 10 лет я запечатлеваю самые искренние эмоции, счастливые улыбки и трепетные взгляды влюблённых. 
                        Для меня свадьба — это не просто событие, а настоящая магия момента, который должен остаться с вами навсегда. 
                        На моем сайте все про свадебную съемку.
                    </p>
                    <p style={{marginTop: '10px'}}>Приятного просмотра.</p>
                </div>
            </div>
        </div>
    )
};


export default HeaderImage;
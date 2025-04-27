import styles from './HederArticles.module.scss'
import Image from 'next/image';
import clsx from 'clsx';


const HederArticles = ({
    title
}:{title: string}) => {

    return(
        <div className={styles.hederArticles}>
            <div className={styles.hederArticles__top} />
            <div className={styles.hederArticles__body} >
                <div className={styles.hederArticles__list} >
                    <Image
                        src={'/source/articles/mainPage/Flov.png'}
                        width={55}
                        height={63}
                        alt='веточка'
                    />
                </div>
                <h1 className={styles.hederArticles__text} >{title}</h1>
                <div className={clsx(styles.hederArticles__list, styles._listBottom)} >                        
                    <Image
                        src={'/source/articles/mainPage/Flov.png'}
                        width={55}
                        height={63}
                        alt='веточка'
                    />
                </div>
            </div>
            <div className={styles.hederArticles__bottom} />
        </div>
    )
}

export default HederArticles;
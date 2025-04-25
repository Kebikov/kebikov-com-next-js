import styles from './NotFound.module.scss';
import Image from 'next/image';

const NotFound = () => {
    return(
        <div className={styles.notFound}>
            <div className={styles.body}>
                <Image
                    src={'/source/404/monsters404.png'}
                    width={544}
                    height={619}
                    sizes="(max-width: 768px) 150px, 200px"
                    priority
                    alt="изображение монстра"
                />
                <div className={styles.text}>
                    <p>
                        Ой, такой страницы у меня нет.
                    </p>
                    <p>
                        Error 404
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;






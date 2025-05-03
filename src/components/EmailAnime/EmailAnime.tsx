import styles from './EmailAnime.module.scss';


const EmailAnime = ({
    message
}: {message: string}) => {

    return(
        <div className={styles.animeEmeil} >
            <div className={styles.animeEmeil__body} >
                <div className={styles.animeEmeil__box} >
                    <div className={styles.animeEmeil__meil} >
                        <img src={'/source/contact/email.png'} alt="письмо"/>
                    </div>
                    <div className={styles.animeEmeil__text} >{message}</div>
                </div>
            </div>
        </div>
    )
}


export default EmailAnime;
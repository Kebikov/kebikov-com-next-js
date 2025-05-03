import styles from './Social.module.scss';


const Social = () => {

    return(
        <div className={styles.social} id="social" >
            <div className={styles.body} >
                <div className={styles.info} >
                    <span>Phone<br/></span>
                    <a href={"tel:+375296949843"} style={{textDecoration: 'underline'}}>+375 29 694-98-43</a>
                </div>
                <div className={styles.info} >
                    <span>Address<br/></span>
                    г.Минск, ул.Рафиева 109 / 126
                </div>
                <div className={styles.info} >
                    <span>Email<br/></span>
                    kebikovgen@gmail.com
                </div>
            </div>
        </div>
    )
} 


export default Social;
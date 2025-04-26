import styles from './TitlteBlock.module.scss';



const TitlteBlock = ({
    title
}: {title: string}) => {

    return(
        <div className={styles.title} >
            <div className={styles.line} ></div>
            <h2 className={styles.text} >
                {title}
            </h2>
            <div className={styles.line} ></div>
        </div>
    )
}

export default TitlteBlock;
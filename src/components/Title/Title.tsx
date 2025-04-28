import styles from './Title.module.scss';


const Title = ({
    title,
    color
}: {title: string, color: string}) => {

    return(
        <div className={styles.title} style={{color}}>
            {title}
        </div>
    )
}


export default Title;
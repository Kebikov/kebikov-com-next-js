import styles from './ArticleEntry.module.scss';


const ArticleEntry = ({
    text
}:{text: string | React.ReactNode}) => {

    //* render 
    return(
        <div className={styles.text} >
            {text}
        </div>
    )
}

export default ArticleEntry;
import { FC } from "react";
import styles from './ErrorMessage.module.scss';


interface IErrorMessage {
    name: string;
    error: Record<string, string>;
}


const ErrorMessage: FC<IErrorMessage> = ({
    name,
    error
}) => {

    return(
        <>
            {
                error[name] ? <div className={styles.error} >{error[name]}</div>
                :
                null
            }
        </>
    )
}


export default ErrorMessage;
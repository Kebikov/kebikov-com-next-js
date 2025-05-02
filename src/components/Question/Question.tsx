import styles from './Question.module.scss';
import type { IDataQuestion } from "@/data/dataQuestion";
import { FC } from "react";
import clsx from 'clsx';


interface IQuestion {
    item: IDataQuestion;
    setCurrentId: React.Dispatch<React.SetStateAction<number | undefined>>;
    currentId?: number;
    id: number;
}


const Question: FC<IQuestion> = ({
    item, 
    setCurrentId, 
    currentId, 
    id
}) => {

    const onClick = () => {
        currentId === id ? setCurrentId(undefined) : setCurrentId(id);
    }

    return(
        <div 
            className={styles.question}
            onClick={onClick} 
        >
            <div className={styles.line} />
            <h2 className={clsx(styles.case,currentId === id && styles.rotate)} >
                {item.case}
            </h2>
            <div className={clsx(styles.answer,currentId === id && styles.rotate)}>
                {item.answer}
            </div>
        </div>
    )
}

export default Question;
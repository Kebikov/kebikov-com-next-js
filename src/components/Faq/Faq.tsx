"use client";

import styles from './Faq.module.scss';
import { FC, useState } from 'react';
import { dataQuestion } from '@/data/dataQuestion';
import Question from '../Question/Question';



const Faq: FC = () => {

    const [currentId, setCurrentId] = useState<number>();
    console.log(currentId);
    return(
        <>
        <div className={styles.faq} >
            <div className={styles.body} >
                <h1 className={styles.h1} >
                    <a href='/' className='ancor' >Свадебный фотограф Минск</a>, стоимость услуг.
                </h1>
                <div className={styles.text} >
                    <p>Уважаемые молодожёны, сейчас я постараюсь осветить наиболее часто встречающиеся вопросы нашего творческого сотрудничества. Хочу, чтобы после прочтения, вам все стало понятнее. Приятного чтения.</p>
                </div>
                <div className={styles.title} >FAQ</div>
                {
                    dataQuestion.map((item, i) => 
                        <Question 
                            item={item} 
                            setCurrentId={setCurrentId} 
                            currentId={currentId} 
                            id={i} 
                            key={i}
                        />
                    )
                }
                <div className={styles.line} />
            </div>
            <div className={styles.borderBottom} />
        </div>
        </>
    )
}

export default Faq;
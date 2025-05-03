"use client";

import styles from './FormContact.module.scss';
import EmailAnime from '../EmailAnime/EmailAnime';
import { useState } from 'react';
import { motion } from "framer-motion";
import { FC } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useOnSubmit from './hook/useOnSubmit';
import { motionButton, motionText } from './helpers/motionFormContact';
import type { IStateDataForm } from './hook/useOnSubmit';


interface IFormContact {
    color: string;
}


const FormContact: FC<IFormContact> = ({
    color
}) => {

    const [stateForm, setStateForm] = useState<IStateDataForm>({email: '', msg: '', check: undefined});
    const {message, error, onSubmit} = useOnSubmit(stateForm, setStateForm);

    const handelChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStateForm(state => ({...state, [evt.target.name]: evt.target.value}));
    }

    return(
        <>
            {
                message ? <EmailAnime message={message}/> 
                : null
            }
            <div className={styles.formContact} id="FormContact" >
                <div className={styles.body} >
                    <div className={styles.bodyAfter} style={{background: `linear-gradient(to top left, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <div className={styles.bodyBefore} style={{background: `linear-gradient(to top right, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <motion.div
                        variants={motionText}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{once: true}}
                        className={styles.text} 
                    >
                        Проверьте через e-mail, свободна ли ваша дата?!<br/>или позвоните<br/><a href='tel:+375296949843' className='ancor' >+375 29 694 98 43</a> (Евгений)<br/>Вы можете написать в соц.сети.
                    </motion.div>
                        <form 
                            className={styles.form}
                            onSubmit={onSubmit}
                        >
                            <label htmlFor="email"  className={styles.label} >Ваша почта</label>
                            <input 
                                className={styles.email}
                                type='text'
                                name='email' 
                                id='email' 
                                placeholder='Email'
                                value={stateForm.email ? stateForm.email : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='email' error={error} />

                            <label htmlFor="msg" className={styles.label} >Ваше сообщение</label>
                            <textarea
                                className={styles.textarea}
                                id="msg"
                                name="msg"
                                placeholder='Сообшение...'
                                rows={3}
                                value={stateForm.msg ? stateForm.msg : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='msg' error={error} />
                            <input
                                id="check"
                                name="check"
                                className={styles.check}
                                placeholder='Введите ответ цифрой: два плюс три'
                                value={stateForm.check ? stateForm.check : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='check' error={error} />
                            <motion.button
                                variants={motionButton}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{once: true}}

                                type="submit" 
                                className={styles.button} >
                                Отправить
                            </motion.button>
                        </form>
                </div>
            </div>
        </>
    )
};

export default FormContact;
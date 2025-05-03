"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ContactsHeader.module.scss';


const ContactsHeader = () => {

    return(
        <div className={styles.header} >
            <div className={styles.subtitle} >
                <h1 className={styles.title} >Контакты фотографа</h1>
                <h2 className={styles.text} >
                    Всё ещё сомневаетесь?<br/>
                    Посмотрите мои <a href="/" className='ancor'>свадебные фотографии</a> или почитайте <a href="/reviews" className='ancor'>отзывы клиентов</a>.<br/>
                    Заполните <a href="#FormContact" className='ancor' >форму ниже</a> или свяжитесь удобным для вас способом.
                </h2>
            </div>
            <motion.div
                initial={{x: 700, rotate: 180}}
                animate={{x: 0, rotate: 0}}
                transition={{delay: .5, duration: 1}}
                className={styles.pic}
            >
                <Image
                    src={'/source/contacts/1.jpg'}
                    width={1200}
                    height={1200}
                    alt='аватарка свадебного фотографа в Минске'
                />
            </motion.div>
        </div>
    )
}


export default ContactsHeader;
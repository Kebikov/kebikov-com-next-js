"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import styles from './ImageAboutMe.module.scss';


const ImageAboutMe = () => {

    const motionImg = {
        hidden: {
            x: -500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1
            }
        }
    }

    return(
        <motion.div 
            variants={motionImg}
            initial={'hidden'}
            animate={'visible'}
            viewport={{once: true}}
            className={styles.images}
        >
            <Image
                src={'/source/aboutMe/me.jpg'}
                width={800}
                height={1000}
                alt='свадебный фотограф в Минске'
            />
        </motion.div>
    )
}


export default ImageAboutMe;
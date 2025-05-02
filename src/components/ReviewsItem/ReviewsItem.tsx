"use client";

import styles from './ReviewsItem.module.scss';
import { motion, useScroll, useInView, useTransform } from 'framer-motion';
import { IDataReviews } from '@/data/dataReviews';
import { FC, useRef } from 'react';
import Image from 'next/image';


interface IReviewsItem {
    item: IDataReviews;
}


/** Карточка с одним отзывом. */
const ReviewsItem: FC<IReviewsItem> = ({
    item
}) => {

    const refBody = useRef(null);
    const refItem = useRef(null);

    const inView = useInView(refItem);

    const { scrollYProgress } = useScroll({
        target: refBody,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    const {image, text, name, url} = item;

    return(
        <motion.div 
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : undefined}
            transition={{
                duration: .7
            }}
            viewport={{amount: .2, once: true}}
            style={{
                scale: scale,
                transformOrigin: "center top",
                position: 'relative'
            }}
            className={styles.reviewsItem} 
            ref={refItem}
        >
            <div 
                className={styles.point}
                ref={refBody} 
            />
            <div className={styles.top} >
                <div className={styles.picture} >
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        alt='фото клиента оставившего отзыв о работе свадебного фотографа в Минсе'
                    />
                </div>
                <div className={styles.info} >
                    <div className={styles.name} >{name}</div>
                    <a href={url} className={styles.link} >@instagram</a>
                </div>
            </div>

            <div className={styles.text} >
                {text}
            </div>
        </motion.div>
    )
}


export default ReviewsItem;



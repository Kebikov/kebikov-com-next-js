"use client";

import styles from './ReviewsItem.module.scss';
import { useRef, useEffect } from 'react';
import { IDataReviews } from '@/data/dataReviews';
import { FC } from 'react';
import Image from 'next/image';

interface IReviewsItem {
    item: IDataReviews;
}


/** Карточка с одним отзывом. */
const ReviewsItem: FC<IReviewsItem> = ({
    item
}) => {

    const {image, text, name, url} = item;

    return(
        <div className={styles.reviewsItem} >
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
        </div>
    )
}


export default ReviewsItem;
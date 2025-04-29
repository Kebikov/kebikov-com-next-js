"use client";

import styles from './LineTotalReviews.module.scss';
import { dataReviews } from '@/data/dataReviews';
import { useAppSelector } from '@/redux/store/hooks';
import clsx from 'clsx';


const LineTotalReviews = () => {

    const {activeSlidesReviews} = useAppSelector(state => state.indexSlice);


    let items = dataReviews.map((item, i) => {
        return(
            <div 
                className={
                    i === activeSlidesReviews || i === activeSlidesReviews + 1 || i === activeSlidesReviews + 2 
                    ? 
                    clsx(styles.line, styles.fullColor) 
                    : 
                    styles.line
                } 
                key={i}
            ></div>
        )
    });


    return(
        <div className={styles.reviewsTotal} >
            <div className={styles.reviewsTotal__body} >
                {items}
            </div>
        </div>
    )
}


export default LineTotalReviews;
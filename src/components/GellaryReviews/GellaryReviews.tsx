"use client";

import styles from './GellaryReviews.module.scss';
import { useEffect, useRef } from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { dataReviews } from '@/data/dataReviews';
import { useDispatch } from 'react-redux';
import { setActiveSlidesReviews } from '../../redux/slice/indexSlice';
import { RefObject } from 'react';
import { PointerEvent } from 'react';

/**
 * @component Галерея отзывов.
 */
const GellaryReviews = () => {

    const dispatch = useDispatch();
    const refUseLine = useRef<HTMLDivElement>(null);


    let line: HTMLDivElement | null  = null;
    let kidsWidth: number = 0;
    let kidsTotal: number = 0;
    let slidesCurrent: number = 0;
    let direction: number = 0;
    let dragStart: number = 0;
    let dragMove: number = 0;
    let dragEnd: number = 0;
    let pointNow: number = 0;
    let reviewsItemLink: HTMLDivElement | null  = null;

    
    const effect = () => {
        if(refUseLine && refUseLine.current) {
            line = refUseLine.current;
            size();
        }
    }

    const size = () => {
        if(!line) return;
        line.style.width = `${document.documentElement.clientWidth}px`;
        kidsTotal = line.childElementCount;
        if(!reviewsItemLink)  return;
        kidsWidth = reviewsItemLink.getBoundingClientRect().width;
        events();
    }

    const events = () => {
        window.addEventListener('resize', size);
        if(!line) return;
        if(window.innerWidth > 1200) {
            line.addEventListener('pointerdown', startMove);
            line.addEventListener('pointerup', endMove);
        } else {
            line.removeEventListener('pointerdown', startMove);
            line.removeEventListener('pointerup', endMove);
            move(0);
        }
    }

    const startMove = (e: globalThis.PointerEvent) => {
        if(!line) return;
        line.style.transform= `translate(${pointNow}px, 0)`;
        dragStart = e.pageX;
        line.addEventListener('pointermove', moveFinger);
    }

    const moveFinger = (e: globalThis.PointerEvent) => {
        if(!line) return;
        line.classList.remove('trans');
        dragMove = e.pageX;
        move(pointNow + dragMove - dragStart);
    }

    const endMove = (e: globalThis.PointerEvent) => {
        if(!line) return;
        dragEnd = e.pageX;
        direction = dragStart - dragEnd;
        line.removeEventListener('pointermove', moveFinger);
        line.classList.add('trans');
        ifPlusSlides();
        ifMinusSlides();
    }

    const ifPlusSlides = () => {
        if(direction > 0) {
            if(slidesCurrent >= kidsTotal - 3) {
                slidesCurrent = kidsTotal - 3;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }else{
                slidesCurrent ++;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const ifMinusSlides = () => {
        if(direction < 0) {
            if(slidesCurrent <= 0) {
                slidesCurrent = 0;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = 0;
                move(pointNow);
            }else{
                slidesCurrent --;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const move = (x: number) => {
        if(!line) return;
        line.style.transform= `translate(${x}px, 0)`;
    }

    const setReviewsItemLink = (link: HTMLDivElement | null) => {
        reviewsItemLink = link;
    }

    const reviewsItems = dataReviews.map((item, i) => {
        return(
            <ReviewsItem item={item} key={i} setReviewsItemLink={setReviewsItemLink}/>
        )
    });

    useEffect(() => {
        effect();
        return () => {
            if(!line) return;
            window.removeEventListener('resize', size);
            line.removeEventListener('pointerdown', startMove);
            line.removeEventListener('pointerup', endMove);
            line.removeEventListener('pointermove', moveFinger);
        }
    }, []);


    return(
        <div className={styles.gellaryReviews} >
            <div className={styles.useLine} ref={refUseLine}>
                {reviewsItems}
            </div>
        </div>
    )
}


export default GellaryReviews;
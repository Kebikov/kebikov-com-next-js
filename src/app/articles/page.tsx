"use client";

import style from './Articles.module.scss';
import CoverArticle from '@/components/CoverArticle/CoverArticle';
import  { dataArticles } from '@/data/dataArticles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLineHeader } from '@/redux/slice/indexSlice';
import { Metadata } from 'next';





const Articles = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);

    return(
        <>
            <div className={style.title} >
                <h1 className={style.text} >CТАТЬИ⋅СВАДЕБНОЙ⋅ТЕМАТИКИ</h1>
            </div>
            <div className={style.article} >
                {
                    dataArticles.map((item, i) => <CoverArticle data={item} key={i} />)
                }
            </div>
        </>
    )
}


export default Articles;


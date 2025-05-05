"use client";

import styles from './PopupTheme.module.scss';
import { useAppSelector } from '@/redux/store/hooks';
import { useAppDispatch } from '@/redux/store/hooks';
import Theme from '@/utils/Theme';
import { SET_THEME, SET_POPUP_THEME } from '@/redux/slice/indexSlice';
import clsx from 'clsx';
import Image from 'next/image';


const PopupTheme = () => {

    const dispatch = useAppDispatch();
    const isShow = useAppSelector(state => state.indexSlice.popupTheme);

    const onDark = () => {
        Theme.setTheme('dark');
        dispatch(SET_THEME('dark'));
        dispatch(SET_POPUP_THEME(false));
    }

    const onLight = () => {
        Theme.setTheme('light');
        dispatch(SET_THEME('light'));
        dispatch(SET_POPUP_THEME(false));
    }


    return(
        <div 
            className={styles.popupTheme}
            style={isShow ? {transform: 'translate(50%, 0px)'} : {transform: 'translate(50%, 500px)'}} 
        >
            <div className={styles.up} >
                <div className={styles.image} >
                    <div className={styles.image__body} >
                        <Image
                            src={'/source/icon/moon.png'}
                            height={234}
                            width={234}
                            alt='moon'
                        />
                    </div>
                </div>
                <div className={styles.title} >Включить тёмную тему?</div>
                <div className={styles.text} >Сейчас у вас включена светлая тема сайта, но вы можете включить темную.</div>
            </div>
            <div className={styles.down} >
                <button 
                    className={clsx(styles.light, styles.button)} 
                    onClick={onLight}
                >
                    отменить
                </button>
                <button 
                    className={clsx(styles.dark, styles.button)}
                    onClick={onDark}
                >
                    сменить
                </button>
            </div>
        </div>
    )
}

export default PopupTheme;
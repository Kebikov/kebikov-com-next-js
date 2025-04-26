"use client";

import styles from './Gallery.module.scss';
import { orderDesktop, orderMobile } from '@/data/orderGalleryMain';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import Column from '../Column/Column';


export type TDevice = 'desktop' | 'mobile';


const Gallery = () => {

    /** `Все элементы изображений для отображения.` */
    let pictures: React.ReactNode[] = [];

    const [device, setDevice] = useState<TDevice>();

    let { width } = useWindowSize();

    if(device === 'desktop') {
        pictures = orderDesktop.map((order, i) => <Column order={order} key={i} />);
    } else if(device === 'mobile') {
        pictures = orderMobile.map((order, i) => <Column order={order} key={i} />);
    } else {
        pictures = orderMobile.map((order, i) => <Column order={order} base key={i} />);
    }

    useEffect(() => {
        if(width > 749) {
            if(device !== 'desktop') setDevice('desktop');
        } else {
            if(device !== 'mobile') setDevice('mobile');
        }

    },[width, device]);

    return(
        <div className={styles.gallery} >
            {pictures}
        </div>
    )
}


export default Gallery;
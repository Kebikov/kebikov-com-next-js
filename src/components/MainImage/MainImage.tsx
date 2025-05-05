"use client";

import styles from './MainImage.module.scss';
import Image from "next/image";
import { useWindowSize } from 'react-use';
import { useEffect, useState } from 'react';
import cache from '@cache/source__headerImage.json';


interface IImage {
    type: 'desktop' | 'mobile';
    src: string;
    width: number;
    height: number;
}


const desktop: IImage = {
    type: 'desktop',
    src: cache.desktop.src,
    width: cache.desktop.width,
    height: cache.desktop.height
};

const mobile: IImage = {
    type: 'mobile',
    src: cache.mobile.src,
    width: cache.mobile.width,
    height: cache.mobile.height
}

const point = 750;


const MainImage = () => {

    const [image, setImage] = useState<IImage>();

    let { width } = useWindowSize();

    useEffect(() => {
        if(!image?.type) {
            width > point ? setImage(desktop) : setImage(mobile);
        }

        if(image?.type && image.type === 'mobile' && width > point) {
            setImage(desktop);
        }

        if(image?.type && image.type === 'desktop' && width <= point) {
            setImage(mobile);
        }
    }, [width]);

    if(!image?.type) return null;
    
    return(
        <div className={styles.container} >
            <Image
                src={image.src}
                width={image.width}
                height={image.height}
                sizes="
                    (max-width: 400px) 384px, 
                    (max-width: 640px) 640px, 
                    (max-width: 750px) 750px,
                    (max-width: 1000px) 1080px,
                    (max-width: 1920px) 1920px, 
                    2560px
                "
                priority
                alt='главное изображение сайта свадебного фотографа'
            />
        </div>
    )
};

export default MainImage;
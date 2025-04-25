"use client";


import styles from './MainImage.module.scss';
import Image from "next/image";
import { useWindowSize } from 'react-use';
import { useEffect, useState } from 'react';


interface IImage {
    type: 'desktop' | 'mobile';
    url: string;
    width: number;
    height: number;
}


const desktop: IImage = {
    type: 'desktop',
    url: '/source/headerImage/desktop.jpg',
    width: 2560,
    height: 823
};

const mobile: IImage = {
    type: 'mobile',
    url: '/source/headerImage/mobile.jpg',
    width: 1000,
    height: 1431
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
        <div className={styles.container}>
            <Image
                src={image.url}
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
"use client";

import styles from './PackageOfServices.module.scss';
import { motion } from 'framer-motion';
import type { IArrParagraphs } from '@/data/dataPrice';
import type { IImageCache } from '@/cache/types'; 
import type { IDataPrice } from '@/data/dataPrice';
import { FC } from 'react';
import PackageDescription from '../PackageDescription/PackageDescription';
import Image from 'next/image';
import clsx from 'clsx';


interface IPackageOfServices {
    item: IDataPrice;
    imageClass: string;
}


const Line = () => <div className={styles.line} />;


const PackageOfServices: FC<IPackageOfServices> = ({
    item,
    imageClass
}) => {

    const {image, title, cash, description, arrParagraphs} = item;

    const itemsParagraphs = arrParagraphs.map((item, i) => {
        return(
            <PackageDescription title={item.title} subtitle={item.subtitle} number={i} key={i}/>
        )
    });

    return(
        <>
            <div className={styles.packageOfServices} >
                <div className={styles.body} >
                    <Image
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        placeholder='blur'
                        blurDataURL={image.blurDataURL}
                        className={clsx(styles.imgCommon, styles[imageClass])}
                        sizes="
                            (max-width: 750px) 750px,
                            (max-width: 1000px) 1080px,
                            (max-width: 1920px) 1920px, 
                            2560px
                            "
                        alt={image.alt}
                    />
                    <div className={styles.tape} >
                        <h2 className={styles.h2} >пакет свадебной съемки</h2>
                        <Line/>
                        <div className={styles.title} >{title}</div>
                        <Line/>
                        <div className={styles.cash} >{cash}</div>
                    </div>
                </div>
            </div>
            <div className={styles.priceDescription} >
                {description}
            </div>
            <div className={styles.description} >
                {itemsParagraphs}
            </div>
        </>
        
    )
}


export default PackageOfServices;
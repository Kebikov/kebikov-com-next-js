"use client";

import styles from './Wedding.module.scss';
import Image from 'next/image';
import dataWeddingSeries from "@/data/weddingSeries/dataWeddingSeries";
import type { TSeries } from "@/data/weddingSeries/types";
import WeddingSeries from '@/components/WeddingSeries/WeddingSeries';
import { useParams } from 'next/navigation';


const Wedding = () => {

    const {slug} = useParams<{slug: TSeries}>();
    const data = dataWeddingSeries[slug];
    const imagesKeys = Object.keys(data.images);

    return(
        <>
            <div className={styles.wedding} >
                <div className={styles.line} />
                <h1 className={styles.text} >
                    {
                        data.title
                    }
                </h1>
                <div className={styles.line} />
            </div>
            {
                data.description ?
                <div className={styles.description} >
                    <div className={styles.description__body} >
                        {
                            data.description
                        }
                    </div>
                </div>
                : 
                null
            }
            <div className={styles.photo} >
                {
                    imagesKeys.map((item, i) => {
                        const image = data.images[item];
                        return(
                            <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                placeholder='blur'
                                blurDataURL={image.blurDataURL}
                                priority={i === 0 || i === 1} 
                                alt={image.alt}
                                key={i}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.anotherWedding} >
                <div className={styles.anotherWedding__body} >
                    <WeddingSeries/>
                </div>
            </div>
        </>
    )
}


export default Wedding;








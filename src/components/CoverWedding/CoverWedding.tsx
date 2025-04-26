import styles from './CoverWedding.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import type { InameSeries } from '@/data/types/weddingSeries.type';
import { IImageCache } from '@/cache/types/index';
import Image from 'next/image';


interface ICoverWedding {
    data: InameSeries;
    cover: IImageCache;
}


 /** `Обложка для сводьбы.` */
const CoverWedding: FC<ICoverWedding> = ({
    data, 
    cover
}) => {

    return(
        <Link
            href={`/weddings-all/${data.link}`}
            className={styles.coverWedding} 
        >
            <div className={styles.item} >
                <Image
                    src={cover.src}
                    width={cover.width}
                    height={cover.height}
                    placeholder='blur'
                    blurDataURL={cover.blurDataURL}
                    alt={cover.alt}
                />
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.subTitle}>
                    wedding day
                </div>
            </div>
        </Link>
    )
}


export default CoverWedding;



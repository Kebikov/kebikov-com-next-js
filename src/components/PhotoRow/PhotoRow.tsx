import styles from './PhotoRow.module.scss';
import { FC } from 'react';
import type { IImageCache } from '@/cache/types';
import Image from 'next/image';


interface IPhotoRow {
    arrPhoto: Array<{
        img: IImageCache;
        alt: string;
    }>;
}


const PhotoRow: FC<IPhotoRow> = ({arrPhoto}) => {

    const isOddNumber = arrPhoto.length % 2;

    return(
        <div className={styles.photoRow} >
            <div className={styles.body} >
                {
                    arrPhoto.map(item => (
                            <div className={isOddNumber ? styles.oddNumber : styles.evenNumber} key={item.img.src} >
                                <Image
                                    src={item.img.src}
                                    width={item.img.width}
                                    height={item.img.height}
                                    placeholder='blur'
                                    blurDataURL={item.img.blurDataURL}
                                    alt={item.alt}
                                />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}


export default PhotoRow;



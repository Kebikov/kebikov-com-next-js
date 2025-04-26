import styles from './Column.module.scss';
import cache from '@cache/source__wedding__gallery.json';
import { FC } from "react";
import Image from 'next/image';


interface IColumn {
     /** `Порядок рендера изображений.` */
    order: number[];
     /** `Надо ли рендерить базовый вариант для SEO.` */
    base?: boolean;
}


 /** `Создает одну калонку с изображениями.` */
const Column: FC<IColumn> = ({
    order,
    base
}) => {

    return (
        <div className={styles.column} >
            {
                order.map(item => (
                    <Image
                        src={
                            base ? cache[String(item) as keyof typeof cache].blurDataURL
                            :
                            cache[String(item) as keyof typeof cache].src
                        }
                        style={
                            base ? {display: 'none'} 
                            : 
                            undefined
                        }
                        width={cache[String(item) as keyof typeof cache].width}
                        height={cache[String(item) as keyof typeof cache].height}
                        placeholder='blur'
                        blurDataURL={cache[String(item) as keyof typeof cache].blurDataURL}
                        alt='свадебная фотография'
                        key={item}
                    />
                ))
            }
        </div>
    )
};


export default Column;
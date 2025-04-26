import styles from './CoverArticle.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import { IArticlesData } from '@/data/dataArticles'; 
import Image from 'next/image';


interface IArticle {
    data: IArticlesData;
}


const CoverArticle: FC<IArticle> = ({
    data
}) => {

    const {picture, title, top, subtitle, link} = data;

    return(
        <article className={styles.article} >
            <div className={styles.article__body} >
                <div className={styles.img} >
                    <Image 
                        src={picture.src}
                        width={picture.width}
                        height={picture.height}
                        style={{top: top ?? `${top}%`}}
                        placeholder='blur'
                        blurDataURL={picture.blurDataURL}
                        alt={picture.alt}
                    />
                </div>
                <div className={styles.title} >{title}</div>
                <div className={styles.subtitle} >{subtitle}</div>
                <div className={styles.button} >
                    <Link href={link} className={styles.link}>читать статью</Link>
                </div>
            </div>
        </article>
    )
}

export default CoverArticle;
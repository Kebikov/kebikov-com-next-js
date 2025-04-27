import styles from './ArticleBlank.module.scss';
import { FC } from "react";
import { IDataArticleBlank } from '@/data/types/articleBlank.types';
import Image from 'next/image';
import clsx from 'clsx';


interface IArticleBlank {
    data: IDataArticleBlank;
    side?: boolean;
    i: number;
}


const ArticleBlank: FC<IArticleBlank> = ({
    data,
    i,
    side = false
}) => {

    const {title, text, img, icon} = data;

    return(
            <section className={styles.articleBlank} >
                <div className={clsx(styles.itemImg, side && styles._orderTwo)} >
                    <div className={styles.imgage} >
                        <Image
                            src={img.src}
                            width={img.width}
                            height={img.height}
                            placeholder='blur'
                            blurDataURL={img.blurDataURL}
                            priority={i === 0 || i === 1}
                            alt={'изображение к статье'}
                        />
                    </div>
                </div>
                <div className={clsx(styles.itemText, side && styles._orderOne)} >
                    <div className={styles.textBox}>
                        <Image
                            src={icon}
                            width={50}
                            height={50}
                            alt='число от 1 до 15'
                        />
                        <div className={styles.title} >
                            {title}
                        </div>
                    </div>
                    <div className={styles.text} >
                        {text}
                    </div>
                </div>
            </section>
    )
}


export default ArticleBlank;
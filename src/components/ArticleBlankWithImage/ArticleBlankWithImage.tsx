import styles from './ArticleBlankWithImage.module.scss';
import { IImageCache } from "@/cache/types";
import { FC } from "react";
import Image from "next/image";


interface IArticleBlankWithImage {
    title: string;
    image?: IImageCache;
    alt?: string;
    children: React.ReactNode;
}


const ArticleBlankWithImage: FC<IArticleBlankWithImage> = ({
    title,
    image,
    alt,
    children
}) => {
    return(
        <section className={styles.article} >
            <div className={styles.title} >{title}</div>
            <div className={styles.text} >
                {
                    image ?
                    <div className={styles.img} >
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            placeholder='blur'
                            blurDataURL={image.blurDataURL}
                            alt={alt ?? ''}
                        />
                    </div>
                    :
                    null
                }
                {
                    children
                }
            </div>
        </section>
    )
};

export default ArticleBlankWithImage;
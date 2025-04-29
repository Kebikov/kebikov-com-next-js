import Image from 'next/image';
import dataWeddingSeries from "@/data/weddingSeries/dataWeddingSeries";
import WeddingSeries from '@/components/WeddingSeries/WeddingSeries';
import styles from './Wedding.module.scss';
import type { TPropsWedding } from './layout';


const Wedding = async ({params}: TPropsWedding) => {

    const {slug} = await params;
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
};


export default Wedding;














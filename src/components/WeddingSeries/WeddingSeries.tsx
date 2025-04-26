import styles from './WeddingSeries.module.scss';
import CoverWedding from '../CoverWedding/CoverWedding';
import dataWeddingsSeries from '@/data/dataWeddingsSeries';
import cache from '@cache/source__weddingsSeries.json';


const WeddingSeries = () => {
    
    return(
        <div className={styles.weddingSeries} >
            { 
                dataWeddingsSeries.map(item => 
                    <CoverWedding data={item} cover={cache[String(item.image) as keyof typeof cache]} key={item.image} /> 
                )
            }
        </div>
    )
};


export default WeddingSeries;


import styles from './BeautifulWeddingFinale.module.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleEntry from '../../../components/ArticleEntry/ArticleEntry';
import ArticleBlank from '@/components/ArticleBlank/ArticleBlank';
import { data } from '@/data/dataBeautifulWeddingFinale';


const BeautifulWeddingFinale = () => {

    return(
        <>
            <HederArticles title={'15 ВАРИАНТОВ КРАСИВОГО СВАДЕБНОГО ФИНАЛА'}/>
            <div className={styles.container}>
                <ArticleEntry text={'Если вы читаете сейчас этот текст, значит перед вами дилемма, давайте разбираться. Я сейчас вам дам лишь вектор направления, что бы вы сориентировались какие варианты вообще есть, а выбор за вами. Расскажу вам, что сам видел, что нашел в сети интересного и как бы я это сделал сам.'}/>
                {
                    data.map((item, i) => <ArticleBlank data={item} side={i % 2 === 0} i={i} key={i} />)
                }
            </div>
        </>
    )
}

export default BeautifulWeddingFinale;
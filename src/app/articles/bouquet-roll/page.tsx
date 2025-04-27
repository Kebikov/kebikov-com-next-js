import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleEntry from '@/components/ArticleEntry/ArticleEntry';
import ArticleBlank from '@/components/ArticleBlank/ArticleBlank';
import { dataBouquetRoll } from '@/data/dataBouquetRoll';
import createMetadata from '@/utils/createMetadata';


export const metadata = createMetadata({
    title: "8 Оригинальных Способов Бросить Букет Невесты.",
    description: "Оригинальные способы бросить букет невесты. 8 способов, чтобы не было как у всех. Подборка лучших идей как расстаться с букетом невесты.",
    url: 'https://kebikov.com/articles/bouquet-roll',
    nameImageOpenGraph: 'bouquetRoll.jpg',
    alt: 'Способы Бросить Букет Невесты'
});


const BouquetRoll = () => {

    return(
        <>
            <HederArticles title={'8 ОРИГИНАЛЬНЫХ СПОСОБОВ БРОСИТЬ БУКЕТ НЕВЕСТЫ'}/>
            <div className="containerArticle">
                <ArticleEntry text={'Самое долгожданное событие для каждой не женатой девушки на свадьбе — это бросание букета невесты.В классическом варианте, невеста становится спиной к не женатым подружкам и бросает его, не глядя через плечо. Сейчас я расскажу, как это сделать интересно и весело!'}/>
                {
                    dataBouquetRoll.map((item, i) => <ArticleBlank data={item} side={i % 2 === 0} i={i} key={i} />)
                }
            </div>
        </>
    )
}


export default BouquetRoll;
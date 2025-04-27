import HederArticles from '@/components/HederArticles/HederArticles';
import { dataPerfectWeddingPhotoSession } from '@/data/dataPerfectWeddingPhotoSession';
import createMetadata from '@/utils/createMetadata';
import ArticleEntry from '@/components/ArticleEntry/ArticleEntry';
import ArticleBlank from '@/components/ArticleBlank/ArticleBlank';


export const metadata = createMetadata({
    title: "7 Советов для Идеальной Свадебной Фотосесии.",
    description: "Прочитайте подборку советов и свадебная фотосессия пройдет как по нотам. Пары повторяют одни и те же ошибки, какие ?",
    url: 'https://kebikov.com/articles/perfect-wedding-photo-session',
    nameImageOpenGraph: 'perfectWeddingPhotoSession.jpg',
    alt: 'пара молодожен'
});


const PerfectWeddingPhotoSession = () => {

    return(
        <>
            <HederArticles title={'7 Советов для Идеальной Свадебной Фотосесии'}/>
            <div className="containerArticle">
                <ArticleEntry 
                    text={
                        <p>
                            Прочитайте подборку советов, которые помогут вам при планировании и проведении <a href='/weddings-all' className='ancor' >свадебной фотосессии. </a>
                            Я отснял не один десяток пар и понял, как часто люди повторяют одни и те же ошибки. 
                            Которых с легкостью можно избежать избавившись от неприятных сюрпризов. Прочитайте и свадебная фотосессия пройдет как по нотам !
                        </p>
                    }
                />
                {
                    dataPerfectWeddingPhotoSession.map((item, i) => <ArticleBlank data={item} i={i} side={i % 2 === 0} key={i} />)
                }
            </div>
        </>
    )
}


export default PerfectWeddingPhotoSession;
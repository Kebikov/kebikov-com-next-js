import styles from './WeddingsAll.module.scss';
import WeddingSeries from "@/components/WeddingSeries/WeddingSeries";
import createMetadata from '@/utils/createMetadata';


export const metadata = createMetadata({
    title: "Серии свадебных фотографий.",
    description: "На этой странице вы найдёте подборку свадебных фотосессий. Каждая история — это не просто фотографии, а живая хроника чувств, улыбок, волнительных взглядов и трогательных моментов.",
    url: 'https://kebikov.com/weddings-all',
    nameImageOpenGraph: 'bouquetRoll.jpg',
    alt: 'Способы Бросить Букет Невесты'
});


const WeddingsAll = () => {

    return(
            <>
                <div className="container" >
                    <div className={styles.weddingsAll} >
                        <p>
                            На этой странице вы найдёте подборку свадебных фотосессий.
                            Каждая история — это не просто фотографии, а живая хроника чувств, улыбок, волнительных взглядов и трогательных моментов.
                        </p>
                        <p>
                            Я верю, что свадебная фотография — это искусство сохранить любовь во времени. 
                            Поэтому в своей работе я стараюсь подчеркнуть искренность момента. 
                            Моя задача — запечатлеть не только красоту внешнюю, но и тепло, которое рождается между двумя сердцами в день их свадьбы.
                        </p>
                        <p>
                            Если вы ищете профессионального <a href='/' className='ancor' >свадебного фотографа в Минске</a>, 
                            приглашаю вас познакомиться с моими работами. Возможно, среди этих историй вы узнаете что-то близкое и своё.
                        </p>
                    </div>
                    <WeddingSeries/>
                </div>
            </>
            
    )
}

export default WeddingsAll;
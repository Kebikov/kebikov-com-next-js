import styles from './PricePackages.module.scss';
import createMetadata from "@/utils/createMetadata";
import Faq from "@/components/Faq/Faq";
import clsx from 'clsx';


export const metadata = createMetadata({
    title: "Цены за Съемку Свадебного Дня Свадебного фотографа В Минске.",
    description: "Свадебный фотограф Минск, цены. Три вида готовых пакетов услуг, выберите уже готовый пакет. Приятные цены от 200 до 400 у.е.",
    url: 'https://kebikov.com/price-packages',
    nameImageOpenGraph: 'kebikov.jpg',
    alt: 'Цены за Съемку Свадебного Дня.'
});


const PricePackages = () => {

    return(
        <div className={clsx('container', styles.pricePackages)}>
            <Faq/>
            {/* <PricePackageHeader title={arrHeader[0].title} cash={arrHeader[0].cash} description={arrHeader[0].description} arrParagraphs={arrHeader[0].arrParagraphs} pic={arrHeader[0].pic}/> */}
            {/* <PricePackageHeader title={arrHeader[1].title} cash={arrHeader[1].cash} description={arrHeader[1].description} arrParagraphs={arrHeader[1].arrParagraphs} pic={arrHeader[1].pic} correction={true} />
            <PricePackageHeader title={arrHeader[2].title} cash={arrHeader[2].cash} description={arrHeader[2].description} arrParagraphs={arrHeader[2].arrParagraphs} pic={arrHeader[2].pic}/>
            <PricePackageHeader title={arrHeader[3].title} cash={arrHeader[3].cash} description={arrHeader[3].description} arrParagraphs={arrHeader[3].arrParagraphs} pic={arrHeader[3].pic}/>
            <FormContact color={'var(--color-light-1__to__color-black-1)'}/> */}
        </div>
    )
}

export default PricePackages;
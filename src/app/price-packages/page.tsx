import styles from './PricePackages.module.scss';
import createMetadata from "@/utils/createMetadata";
import Faq from "@/components/Faq/Faq";
import clsx from 'clsx';
import PackageOfServices from '@/components/PackageOfServices/PackageOfServices';
import dataPrice from '@/data/dataPrice';
import FormContact from '@/components/FormContact/FormContact';


export const metadata = createMetadata({
    title: "Цены за Съемку Свадебного Дня Свадебного фотографа В Минске.",
    description: "Свадебный фотограф Минск, цены. Три вида готовых пакетов услуг, выберите уже готовый пакет. Приятные цены от 200 до 400 у.е.",
    url: 'https://kebikov.com/price-packages',
    nameImageOpenGraph: 'kebikov.jpg',
    alt: 'Цены за Съемку Свадебного Дня.'
});


const PricePackages = () => {

    return(
        <div className={clsx('container', styles.pricePackages)} >
            <Faq/>
            <PackageOfServices item={dataPrice[1]} imageClass={'img_1'} />
            <PackageOfServices item={dataPrice[2]} imageClass={'img_3'} />
            <PackageOfServices item={dataPrice[3]} imageClass={'img_2'} />
            
            <FormContact color={'var(--color-light-1__to__color-black-1)'}/>
        </div>
    )
}

export default PricePackages;
import styles from './scss/Home.module.scss';
import WeddingSeries from '@/components/WeddingSeries/WeddingSeries';
import HeaderImage from '@/components/HeaderImage/HeaderImage';
import Gallery from '@/components/Gallery/Gallery';
import TitlteBlock from '@/components/TitlteBlock/TitlteBlock';
import clsx from 'clsx';


const Home = () => {

    return (
        <>
            <HeaderImage/>

            <div className={clsx("container", styles.marginConteiner)} >
                <Gallery/>
                <TitlteBlock title={'Свадебныe серии'}/>
                <WeddingSeries/>
            </div>
        </>
    )
}

export default Home;

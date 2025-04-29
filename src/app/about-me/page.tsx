import styles from './AboutMe.module.scss';

import createMetadata from '@/utils/createMetadata';
import TextAboutMe from '@/components/TextAboutMe/TextAboutMe';
import ImageAboutMe from '@/components/ImageAboutMe/ImageAboutMe';


export const metadata = createMetadata({
    title: "Краткая информация обо мне",
    description: "Обо мне, на странице краткая информация, познакомитесь со мной чуть лучше, после прочтения, часть вопросов станет для вас яснее.Заходим !",
    url: 'https://kebikov.com/about-me',
    nameImageOpenGraph: 'me.jpg',
    alt: 'свадебный фотограф Минск'
});


const AboutMe = () => {

    return(
        <>
            <div className="container" >
                <div className={styles.aboutMe} >
                    <div className={styles.body} >
                        <ImageAboutMe/>
                        <TextAboutMe/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutMe;


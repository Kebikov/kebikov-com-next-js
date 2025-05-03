import styles from './Contacts.module.scss';
import FormContact from '@/components/FormContact/FormContact';
import Social from '@/components/Social/Social';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import createMetadata from '@/utils/createMetadata';
import clsx from 'clsx';
import ContactsHeader from '@/components/ContactsHeader/ContactsHeader';


export const metadata = createMetadata({
    title: "Контакты Для Связи. Выберите Удобный Для Вас Способ !",
    description: "Контакты для связи со мной, адресс, телефон, почта, так же ссылка Вконтакте и Инстаграмм. Свадебный фотограф Евгений Кебиков, Минск.",
    url: 'https://kebikov.com/contacts',
    nameImageOpenGraph: 'kebikov.jpg',
    alt: 'контакты свадебного фотографа'
});


const Contacts = () => {
    
    return(
            <div className={clsx(styles.contacts, 'container')} >
                <ContactsHeader/>
                <div className={styles.info} >
                    <GoogleMap/>
                    <Social/>
                </div>
                <FormContact color={'var(--color-light-1__to__color-black-1)'}/>
            </div>
    )
}


export default Contacts;




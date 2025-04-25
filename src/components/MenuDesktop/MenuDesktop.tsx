"use client";

import styles from  './MenuDesktop.module.scss';
import LinkMenu from '../LinkMenu/LinkMenu';
import menuData from '../../data/dataLinks';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '@/redux/store/hooks';


const MenuDesktop = () => {

    const currentTheme = useAppSelector(state => state.indexSlice.theme);

    return(
        <div className={styles.menuDesktop}>
            <div className={styles.body}>
                <ul className={styles.left}>
                    <LinkMenu data={menuData.main} />
                    <LinkMenu data={menuData.weddings} />
                    <LinkMenu data={menuData.articles} />
                    <LinkMenu data={menuData.aboutMe} />
                </ul>
                <Link href={'/'} className={styles.logo} >
                    <Image 
                        src={currentTheme === "dark" ? '/source/logo/logo-white.png' : '/source/logo/logo-black.png'} 
                        width={500}
                        height={235}
                        sizes='256px'
                        priority
                        alt="логотип свадебного фотографа" 
                    />
                </Link>
                <ul className={styles.right}>
                    <LinkMenu data={menuData.reviews} />
                    <LinkMenu data={menuData.praice} />
                    <LinkMenu data={menuData.contacts} />
                </ul>
            </div>
        </div>
    )
}


export default MenuDesktop;
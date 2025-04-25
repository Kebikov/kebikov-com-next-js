"use client";

import styles from  './MenuPc.module.scss';
import LinkMenu from '../LinkMenu/LinkMenu';
import logoWhite from '@image/logo/logo-white.png';
import logoBlack from '@image/logo/logo-black.png';
import menuData from '../../data/DataLinks';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '@/redux/store/hooks';


const MenuPc = () => {

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
                    <Image src={currentTheme === "dark" ? logoWhite : logoBlack} height="80" width="153" alt="логотип свадебного фотографа" />
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


export default MenuPc;
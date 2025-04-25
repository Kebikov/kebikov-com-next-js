"use client";

import styles from './Header.module.scss';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import { useAppSelector } from '@/redux/store/hooks';


const Header = () => {

    const lineHeader = useAppSelector(state => state.indexSlice.lineHeader);

    return(
        <header className={styles.header} >
            <MenuDesktop/>
            <MenuMobile/>
            {lineHeader ? <div className={styles.bottomLine} /> : null}
        </header>
    )
}


export default Header;

"use client";

import styles from './Header.module.scss';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuPc from '../MenuPc/MenuPc';
import { useAppSelector } from '@/redux/store/hooks';


const Header = () => {

    const lineHeader = useAppSelector(state => state.indexSlice.lineHeader);

    return(
        <header className={styles.header}>
            <MenuPc/>
            <MenuMobile/>
            {lineHeader ? <div className={styles.bottomLine} /> : null}
        </header>
    )
}


export default Header;

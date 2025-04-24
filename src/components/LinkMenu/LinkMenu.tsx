"use client";

import styles from './LinkMenu.module.scss';
import Link from 'next/link';
import { usePathname } from "next/navigation";

import { TMenuData } from '@/data/DataLinks';
import { FC } from 'react';
import { useAppDispatch } from '@/redux/store/hooks';
import { SET_ACTIVE_MENU } from '@/redux/slice/indexSlice';


interface ILinkMenu {
    data: TMenuData[string]; 
    mobile?: boolean;
}

const LinkMenu: FC<ILinkMenu> = ({
    data,
    mobile = false
}) => {

    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const onClick = () => dispatch(SET_ACTIVE_MENU(false));

    const classLi = mobile ? styles.mob_line : styles.ps_line;
    const classNavLink = mobile ? styles.mob_link : styles.pc_link;

    return(
        <li className={classLi}>
            <Link 
                href={data.path} 
                onClick={onClick} 
                className={pathname === data.path ? `${classNavLink} ${styles.activeLink}` : classNavLink}
            >
                <p>
                    {data.title}
                </p>
            </Link>
        </li>
    )
}


export default LinkMenu;
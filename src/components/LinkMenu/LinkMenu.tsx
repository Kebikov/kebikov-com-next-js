"use client";

import styles from './LinkMenu.module.scss';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { TMenuData } from '@/data/dataLinks';
import { FC } from 'react';
import { useAppDispatch } from '@/redux/store/hooks';
import { SET_ACTIVE_MENU } from '@/redux/slice/indexSlice';
import clsx from 'clsx';


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

    const isActive = pathname === data.path;

    console.log(pathname);
    console.log('data.path = ', data.path);

    return(
        <li className={mobile ? styles.mob_line : styles.ps_line}>
            <Link 
                href={data.path} 
                onClick={onClick} 
                className={clsx(
                    mobile ? styles.mob_link : styles.pc_link, 
                    isActive && styles.activeLink
                )}
            >
                <p>
                    {data.title}
                </p>
            </Link>
        </li>
    )
}


export default LinkMenu;
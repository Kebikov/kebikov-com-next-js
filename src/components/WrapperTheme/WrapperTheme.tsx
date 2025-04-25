'use client';

import { useEffect } from "react";
import Theme from '@/utils/Theme';
import { SET_POPUP_THEME, SET_THEME } from '@/redux/slice/indexSlice';
import { useAppDispatch } from '@/redux/store/hooks';



const WrapperTheme = ({
    children
}:{children: React.ReactNode}) => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        const theme = Theme.getThemeLocalStorage();
        const isDarkTheme = Theme.isDarkTheme();

        if(document.readyState === 'complete') {
            openPopup();
        } else {
            window.addEventListener('load', openPopup);
        }

        // Если тема была до этого выбрана и она записана в LS.
        if(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            dispatch(SET_THEME(theme));
        }
        
        function openPopup() {
            // "Все ресурсы (HTML, изображения, стили, шрифты) загружены."
            setTimeout(() => {
                // Первая загрузка сайта, предложение установки начальной темы.
                if(!theme && isDarkTheme) {
                    dispatch(SET_POPUP_THEME(true));
                }
            }, 3000);
        }

        return () => window.removeEventListener('load', openPopup);
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default WrapperTheme;
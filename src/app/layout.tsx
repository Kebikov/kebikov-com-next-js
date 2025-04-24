import "../scss/globals.scss";
import type { Metadata } from "next";
import { Hand, Mont } from "@/source/font";
import WrapperProviderRedux from "@/components/WrapperProviderRedux/WrapperProviderRedux";
import WrapperTheme from "@/components/WrapperTheme/WrapperTheme";
import Header from "@/components/Header/Header";



export const metadata: Metadata = {
    title: "Свадебный фотограф Минск",
    description: "Свадебный фотограф в Минске. Сохраняю самые трепетные моменты вашего свадебного дня в Минске. Никакой постановки — только настоящие чувства в каждом кадре.",
    icons: [
        {url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon'},
        {url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png'},
        {url: '/favicon/favicon-192x192.png', sizes: '192x192', type: 'image/png'}
    ],
    openGraph: {
        title: 'Свадебный Фотограф Минск, Кебиков Евгений.',
        description: 'Яркие, живые, наполненные улыбками и радостью, фотографии вашего свадебного дня. Свадебный фотограф Минск,Кебиков Евгений +375 29 694-98-43',
        url: 'https://kebikov.com/',
        siteName: 'kebikov.com',
        images: [
            {
                url: `http://localhost:3000/opengraph/kebikov.jpg`,
                width: 1200,
                height: 630,
                alt: 'свабебная фотография'
            }
        ]
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${Hand.className} ${Mont.className}`}>
                <WrapperProviderRedux> 
                    <WrapperTheme>
                        <div className="wrapper" >
                            <Header/>
                            {children}
                        </div>
                    </WrapperTheme>
                </WrapperProviderRedux>
            </body>
        </html>
    );
}

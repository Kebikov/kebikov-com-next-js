import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Статьи свадебной тематики.",
    description: "Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен.",
    icons: [
        {url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon'},
        {url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png'},
        {url: '/favicon/favicon-192x192.png', sizes: '192x192', type: 'image/png'}
    ],
    openGraph: {
        title: 'Статьи свадебной тематики.',
        description: 'Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен.',
        url: 'https://kebikov.com/articles',
        siteName: 'kebikov.com',
        images: [
            {
                url: `http://localhost:3000/opengraph/articles.jpg`,
                width: 1200,
                height: 630,
                alt: 'Статьи свадебной тематики'
            }
        ]
    }
};


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
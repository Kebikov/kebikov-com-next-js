import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Статьи свадебной тематики.",
    description: "Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен.",
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
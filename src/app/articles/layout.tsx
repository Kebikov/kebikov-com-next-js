import type { Metadata } from "next";
import createMetadata from "@/utils/createMetadata";


export const metadata = createMetadata({
    title: "Статьи свадебной тематики.",
    description: "Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен.",
    url: 'https://kebikov.com/articles',
    nameImageOpenGraph: 'articles.jpg',
    alt: 'Статьи свадебной тематики'
});


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
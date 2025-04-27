import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "15 Вариантов Красивого Свадебного Финала !",
    description: "Завершение свадебного вечера, подборка 15 вариантов финала свадьбы, читайте чем завершить свадебный вечер, как зафиналить свадьбу ?",
    openGraph: {
        title: '15 Вариантов Красивого Свадебного Финала !',
        description: 'Завершение свадебного вечера, подборка 15 вариантов финала свадьбы, читайте чем завершить свадебный вечер, как зафиналить свадьбу ?',
        url: 'https://kebikov.com/articles/beautiful-wedding-finale',
        siteName: 'kebikov.com',
        images: [
            {
                url: `http://localhost:3000/opengraph/beautiful-wedding-finale.jpg`,
                width: 1200,
                height: 630,
                alt: 'красивый свадебный финал'
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
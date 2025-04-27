import createMetadata from "@/utils/createMetadata";


export const metadata = createMetadata({
    title: "15 Вариантов Красивого Свадебного Финала !",
    description: "Завершение свадебного вечера, подборка 15 вариантов финала свадьбы, читайте чем завершить свадебный вечер, как зафиналить свадьбу ?",
    url: 'https://kebikov.com/articles/beautiful-wedding-finale',
    nameImageOpenGraph: 'beautiful-wedding-finale.jpg',
    alt: 'красивый свадебный финал'
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
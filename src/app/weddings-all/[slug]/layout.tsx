import { TSeries } from "@/data/weddingSeries/types";
import type { Metadata } from 'next';
import dataWeddingSeries from "@/data/weddingSeries/dataWeddingSeries";


export async function generateMetadata({
    params
}: {params: {slug: TSeries}}): Promise<Metadata> {

    const { slug } = params;

    const data = dataWeddingSeries[slug];

    return {
        title: `Серия свадебных фотографий: ${data.title.replace('&', 'и')}`,
        description: `Фотографии свадьбы: ${data.title.replace('&', 'и')}, свадебная фотосессия в Минске. Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск.`,
        alternates: {
            canonical: `https://kebikov.com/weddings-all/${slug}`
        }
    }
}


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
};


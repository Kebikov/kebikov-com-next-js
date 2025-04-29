import { TSeries } from "@/data/weddingSeries/types";
import type { Metadata } from 'next'
import dataWeddingSeries from "@/data/weddingSeries/dataWeddingSeries";


export type TPropsWedding = {
    params: Promise<{ slug: TSeries }>;
}


export async function generateStaticParams() {
    const result = Object.keys(dataWeddingSeries).map( slug => ({slug}) );
    return result;
}

export async function generateMetadata({params}: TPropsWedding): Promise<Metadata> {
    const { slug } = await params;
    const data = dataWeddingSeries[slug];
    return {
        title: `Серия свадебных фотографий: ${data.title}`,
        description: `Фотографии свадьбы: ${data.title}, свадебная фотосессия в Минске. Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск.`,
        alternates: {
            canonical: `https://kebikov.com/weddings-all/${slug}`
        }
    }
}


export default function Layout({
    children
}: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}
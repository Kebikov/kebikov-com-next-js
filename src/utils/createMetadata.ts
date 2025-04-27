import { Metadata } from "next";


interface IMetadataProps {
    title: string;
    description: string;
    url: string;
    nameImageOpenGraph: string;
    alt: string;
}


const createMetadata = ({
    title,
    description,
    url,
    nameImageOpenGraph,
    alt
}: IMetadataProps): Metadata => {

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: 'kebikov.com',
            images: [
                {
                    url: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL}/opengraph/${nameImageOpenGraph}`,
                    width: 1200,
                    height: 630,
                    alt
                }
            ]
        },
        alternates: {
            canonical: url
        }
    }
};

export default createMetadata;

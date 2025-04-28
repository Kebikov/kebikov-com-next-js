import { IImageCache } from "@/cache/types";


export interface IDataArticleBlank {
    title: string;
    text: string | React.ReactNode;
    img: IImageCache;
    icon: string;
    alt: string;
}
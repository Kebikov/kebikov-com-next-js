import type { IImageCache } from '@/cache/types/index';

export type TSeries = 'MY' | 'PT' | 'DA' | 'DK' | 'JD' | 'SY' | 'SD' | 'SL' | 'NK';

export interface IDataWeddingSeries {
     /** `Заголовок для свадьбы.` */
    title: string;
     /** `Изображения свадьбы.` */
    images: IImageCache[];
     /** `Описание всадебного дня.` */
    description?: React.ReactNode;
}

export type TDataWeddingSeries = {
    [key in TSeries]: IDataWeddingSeries
}

export interface InameSeries {
     /** `Титульное название.` */
    title: string;
     /** `Сокрашение для ссылки. Например: "MY"` */
    link: TSeries;
     /** `Имя изображения, числом.` */
    image: number;
}
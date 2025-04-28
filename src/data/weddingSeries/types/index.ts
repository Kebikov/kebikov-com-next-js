import type { TChacheJSON } from "@/cache/types";

 /** `slug в пути, в отображении серии фотографий` */
export type TSeries = 'MY' | 'PT' | 'DA' | 'DK' | 'JD' | 'SY' | 'SD' | 'SL' | 'NK';

 /** `Данные страницы.` */
export interface IDataWedding {
     /** `Заголовок для свадьбы.` */
    title: string;
     /** `Изображения свадьбы.` */
    images: TChacheJSON;
     /** `Описание всадебного дня.` */
    description?: React.ReactNode;
}

 /** `Все данные страниц.` */
export type TDataWeddingSeries = {
    [key in TSeries]: IDataWedding
}
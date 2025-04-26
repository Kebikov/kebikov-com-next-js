export interface IImageCache {
     /** `путь к изображению в папке public` */
    src: string;
     /** `тексть в alt атрибуте` */
    alt: string;
     /** `ширина изображения` */
    width?: number;
     /** `высота изображения` */
    height?: number;
     /** `plaseholder с низким расширением в формате base64` */
    blurDataURL: string;
}


export type TChacheJSON = Record<string, IImageCache>
//                             '1' ^
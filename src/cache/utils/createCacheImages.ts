import fs from 'fs';
import appRoot from 'app-root-path';
import path from 'path';
import sharp from "sharp";
import { getPlaiceholder } from 'plaiceholder';
import { foldersForChache } from '../data/foldersForChache';
import type { IImageCache, TChacheJSON } from '../types';


function start() {
    for(const folder of foldersForChache) {
        createCacheImages(folder);
    }
}

start();


async function createCacheImages (
    /** `путь к папке с которой получаем изображения в папке "public"` 
      * @example
      * accept > "weddings/DimaAlina"
     */
    currentPath: string
) {

    deleteFolder();

    const pathToFolder = path.resolve(appRoot.path, 'public', ...currentPath.split('/'));

    if(fs.existsSync(pathToFolder)) {
         /** `массив с именами изображений` */
        const arrayImages = fs.readdirSync(pathToFolder);
        const cacheJSON = await iterateImages(arrayImages, pathToFolder, currentPath);
        saveToJSON(cacheJSON, currentPath);
    } else {
        console.info('❌ Folder not found!');
    }
}

 /** `Сбор данных у каждого изображения.` */
async function iterateImages(
    arrayImages: string[], 
    pathToFolder: string, 
    currentPath: string
) {
    const cacheJSON: TChacheJSON = {};

    for(const img of arrayImages) {
        const pathImg = path.resolve(pathToFolder, img);
        const file = await fs.readFileSync(pathImg);
        const {width, height} =  await sharp(file).metadata();
        const {base64} = await getPlaiceholder(file);

        const imageChache: IImageCache = {
            src: `/${currentPath}/${img}`,
            alt: 'свадебная фотография',
            width,
            height,
            blurDataURL: base64
        }
        
        cacheJSON[img.split('.')[0]] = imageChache;
    }

    return cacheJSON;
}

 /** `Сохранение данных в формате JSON.` */
function saveToJSON(file: TChacheJSON, currentPath: string) {
    checkAndCreateFolder();
    const pathToFile = path.resolve(appRoot.path, 'src', 'cache', 'out', `${remadePathToName(currentPath)}.json`);

    fs.writeFileSync(pathToFile, JSON.stringify(file));
    console.info('✅ Successful data write!');
}

 /** `Проверка существования папки "out", если нет создание папки "out".` */
function checkAndCreateFolder() {
    const pathToOut = path.resolve(appRoot.path, 'src', 'cache', 'out');
    if(!fs.existsSync(pathToOut)) {
        fs.mkdirSync(pathToOut);
        console.info('✅ Create folder "out"!');
    }
}

 /** `Удаление папки "out".` */
function deleteFolder() {
    const pathToOut = path.resolve(appRoot.path, 'src', 'cache', 'out');
    if(fs.existsSync(pathToOut)) {
        fs.rmSync(pathToOut, {recursive: true, force: true});
        console.info('✅ Remove folder "out"!');
    }
}

/** `Преобразование пути в имя файла.` 
  * @example
  * accept > "weddings/DimaAlina"
  * return > "weddings__DimaAlina"
 */
function remadePathToName(path: string) {
    return path.replace(/\//g, '__');
}




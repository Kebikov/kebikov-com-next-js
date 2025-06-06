import { IDataWedding } from "../types";
import cache from '@cache/source__wedding__PT.json';


export const PT: IDataWedding = {
    title: 'Паша & Таня',
    images: cache,
    description: 
        <>
            <p>
                Свадебное утро Паши и Тани началось в стильных интерьерах гостиницы "Marriott", где проходили сборы. 
                Это была невероятно красивая и элегантная пара, в каждом кадре чувствовался вкус, стиль и гармония.
            </p>
            <br/>
            <p>
                После церемонии мы отправились в "Robinson Club", где проходил приём гостей и свадебный банкет. 
                Атмосфера праздника была наполнена радостью, тёплыми речами и очень живыми эмоциями. Гости веселились от души — 
                свадьба получилась яркой, искренней и по-настоящему душевной.
            </p>
            <br/>
            <p>
                Ниже вы можете увидеть фотографии, которые передают всю атмосферу этого дня. 
                А если хотите посмотреть другие свадебные истории, 
                <a href="/" className="ancor" > загляните на главную страницу</a> — там собраны лучшие серии и настоящие эмоции моих пар.
            </p>
        </>
}
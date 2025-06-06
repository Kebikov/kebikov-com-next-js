export interface IDataQuestion {
    case: React.ReactNode;
    answer: React.ReactNode;
};


export const dataQuestion: IDataQuestion[] = [
    {
        case: 'СКОЛЬКО СТОИТ СВАДЕБНАЯ ФОТОСЕССИЯ ?',
        answer: 
            <>
                <p>
                    Вы можете выбрать один из четырех пакетов свадебной фотосессии, или мы с вами вместе сформируем ваш индивидуальный комплекс услуг, убрав или добавив пункты по желанию. 
                    Спектр цен  гибко подстраивается под практически любой свадебный бюджет. 
                </p>
                <p>
                    Пожалуйста, <a href='/contacts' className='ancor' >свяжитесь со мной</a>, чтобы обговорить все детали свадебного дня и составить для вас индивидуальный пакет услуг в зависимости от ваших пожеланий.
                </p>
            </>
    },
    {
        case: 'СНИМАЕТЕ ЛИ ВЫ СВАДЕБНЫЕ ФОТОСЕССИИ В ДРУГИХ ГОРОДАХ ?',
        answer: <p>Да, я снимаю свадьбы в любом месте.</p>
    },
    {
        case: 'КАКОЕ КОЛИЧЕСТВО СВАДЕБНЫХ ФОТОГРАФИЙ МЫ ПОЛУЧИМ ?',
        answer: 'Как вы знаете, количество никак не связано с качеством. Несмотря на это, постараюсь не уйти от ответа. Вы получите минимум одну фотографию каждые две минуты фотосъемки.'
    },
    {
        case: 
            <>
                <p>КОГДА МЫ ПОЛУЧИМ СВАДЕБНЫЕ ФОТОГРАФИИ ?</p>
            </>
        ,
        answer: <p>Готовые <a href='/weddings-all' className='ancor' >свадебные фотографии</a> вы получите в течение 90 дней. Также есть вариант для тех, кто хочет поскорее получить фотографии, — дополнительная услуга экспресс обработки, которая сокращает время ожидания до 10 дней.</p>
    },
    {
        case: 'СКОЛЬКО ФОТОГРАФИЙ БУДЕТ ОБРАБОТАНО ?',
        answer: 'Все, абсолютно все фотографии проходят цветокоррекцию и тоновую корректировку. Классические, яркие и натуральные цвета, все то, что вы видели в моем портфолио. Для получения достойного результата мы с вами еще при встрече подберем оптимальные локации для свадебной фотосессии.'
    },
    {
        case: 'ЕСТЬ ЛИ У ВАС СКИДКИ ?',
        answer: 'Скидок у меня нет, вы можете рассчитывать на меньшую цену съемочного часа при заказе более продолжительного пакета услуг, это связано с тем, что мне хочется показать всю историю свадебного дня, а не его часть.'
    },
    {
        case: 'КАК ЗАБРОНИРОВАТЬ ДАТУ СВАДЬБЫ ?',
        answer: 'Предварительную бронь даты вы можете сделать по телефону  +375 29 694 98 43,  мы оговариваем дату и время нашей встречи, на которой мы знакомимся, обсуждаем все ваши пожелания, подписываем договор. Вносится предоплата 100 у.е. и все, дата ваша и только ваша !'
    },
    // {
    //     case:'КАК ВЫ ОТДАЕТЕ СВАДЕБНЫЕ ФОТОГРАФИИ ?',
    //     answer: 'Я как свадебный фотограф, хочу дать своим клиентам максимум положительных эмоций. В свадебный пакетах "Premium" и "Standart", свадебная фотосессия будет записана на флеш USB из дерева с гравировкой ваших имен, я бесплатно распечатаю для вас свадебные фото и все это будет упаковано в деревянный короб на котором будет выполненна индивидуальная гравировка.'
    // },
];
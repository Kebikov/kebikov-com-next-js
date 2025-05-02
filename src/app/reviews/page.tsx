import createMetadata from '@/utils/createMetadata';
import style from './Reviews.module.scss';
import { dataReviews } from '@/data/dataReviews';
import ReviewsItem from '@/components/ReviewsItem/ReviewsItem';


export const metadata = createMetadata({
    title: "Отзывы Клиентов. О Свадебном фотографе Евгений Кебиков.",
    description: "Отзывы от клиентов, прочитайте как все прошло.Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск,Евгений Кебиков.",
    url: 'https://kebikov.com/reviews',
    nameImageOpenGraph: 'reviews.jpg',
    alt: 'свадебный фотограф Минск'
});


const Reviews = () => {

    return (
        <div className="container">
            <div className={style.reviews} >
                {
                    dataReviews.map(item => <ReviewsItem item={item} key={item.name} />)
                }
            </div>
        </div>
    )
}


export default Reviews;
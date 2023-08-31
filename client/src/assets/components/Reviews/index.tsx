import React from 'react';
import './css/style.css';
import { Title } from '../Title';
import { ReviewSlider } from '../ReviewSlider';

export function ReviewsContainer() {
    const arrayReviews = [
        {
            FIO: "Наталья",
            jobTitle: "Заведующий  МБДОУ №14",
            textReview: `Сотрудничаю с Матвеем недавно, но за короткий
            срок помог с раскруткой группы. В планах создание
            сайта. Понравилось, что учитывает ВСЕ пожелания клиента,
            разъясняет кучу непонятных мне моментов, за что отдельное спасибо :)`,
        },
        {
            FIO: "Ирина",
            jobTitle: 'Директор ООО "ТурСистемы"',
            textReview: `Заказывала здесь доработку сайта, в 
            том числе и форму с несколькими фильтрами. Сделал 
            очень качественно и недорого, что очень важно.`,
        },
        {
            FIO: "Сергей",
            jobTitle: 'Ген директор ООО "ТермоБетон"',
            textReview: `Такой активный сотрудник любит и 
            получает удовольствие от работы, собираюсь нанять
            его снова для следующего проекта.`,
        },

    ];

    return (
        <>
            <div className="reviews-container">
                <Title title="Отзывы" />
                <div className="reviews-container_slider">
                    <ReviewSlider items={arrayReviews} />
                </div>
            </div>
        </>
    )
}
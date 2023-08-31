import React from "react";
import "./css/style.css";
import { ServiceCardContainer } from "../ServiceCard";

// Услуги
export function ServicesContainer() {
    const arrayServices = [
        {
            id: 1,
            titleService: 'Веб дизайн',
            textService: 'Составляется по вашему желанию в кротчайшие сроки',
            imageSrc: './images/services/web-design.svg',
        },
        {
            id: 2,
            titleService: 'Разработка',
            textService: 'Для вас у меня всегда найдутся решения под ваши нужды',
            imageSrc: './images/services/development.svg',
        },
        {
            id: 3,
            titleService: 'CEO-оптимизация',
            textService: 'Выйду за рамки классического СЕО',
            imageSrc: './images/services/seo-optimisation.svg',
        },
        {
            id: 4,
            titleService: 'Маркетинг',
            textService: 'Увеличу вам продажи  быстро и надежно',
            imageSrc: './images/services/marketing.svg',
        },

    ]


    return (
        <>
            <div className="services-container">
                <h2>Мои услуги</h2>
                <span>Что я могу Вам предложить</span>
                <div className="services-container-assortiment">
                    {
                        arrayServices.map((element: any, i: any) => (
                            <ServiceCardContainer
                                key={i}
                                titleService={element.titleService}
                                textService={element.textService}
                                imageSrc={element.imageSrc}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
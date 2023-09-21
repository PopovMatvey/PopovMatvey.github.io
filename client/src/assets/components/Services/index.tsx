import React from "react";
import "./css/style.css";
import { ServiceCard } from "../ServiceCard";
import { Title } from "../Title";

/**
 * Контейнер услуги
 * @returns Компонент "Контейнер услуги"
 */
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
        {
            id: 5,
            titleService: '1С-Разработка',
            textService: 'Создам конфигурацию, основываясь на ваших пожеланиях',
            // imageSrc: './images/services/marketing.svg',
        },
        {
            id: 6,
            titleService: 'Сопровождение - IT проектов',
            textService: 'Доработка, сопровождение проектов различной сложности',
            // imageSrc: './images/services/marketing.svg',
        },
        {
            id: 7,
            titleService: 'Разработка приложений на портале Bitrix',
            textService: 'Всегда поможем с внедрением и адаптацией проекта в Ваш бизнес',
            // imageSrc: './images/services/marketing.svg',
        }

    ]


    return (
        <>
            <div className="services-container">
                <Title title="Мои услуги" />
                <span>Что я могу Вам предложить</span>
                <div className="services-container-assortiment">
                    {
                        arrayServices.map((element: any, i: number) => (
                            <ServiceCard
                                key={i}
                                titleService={element.titleService}
                                textService={element.textService}
                                imageSrc={element.imageSrc}
                            />
                        ))
                    }
                </div>
            <div id="portfolio"></div>
            </div>
        </>
    )
}
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
            textMessage: "Здравствуйте, меня итересуют услуги по веб дизайну",
        },
        {
            id: 2,
            titleService: 'Разработка',
            textService: 'Для вас у меня всегда найдутся решения под ваши нужды',
            imageSrc: './images/services/development.svg',
            textMessage: "Здравствуйте, меня итересуют услуги по разработке",
        },
        {
            id: 3,
            titleService: 'CEO-оптимизация',
            textService: 'Выйду за рамки классического СЕО',
            imageSrc: './images/services/seo-optimisation.svg',
            textMessage: "Здравствуйте, меня итересуют услуги по СЕО оптимизации",
        },
        {
            id: 4,
            titleService: 'Маркетинг',
            textService: 'Увеличу вам продажи  быстро и надежно',
            imageSrc: './images/services/marketing.svg',
            textMessage: "Здравствуйте, меня итересуют услуги по маркетингу",
        },
        {
            id: 5,
            titleService: '1С-Разработка',
            textService: 'Создам конфигурацию, основываясь на ваших пожеланиях',
            imageSrc: './images/services/1c-development.svg',
            textMessage: "Здравствуйте, меня итересуют услуги по 1С-разработке",
        },
        {
            id: 6,
            titleService: 'Сопровождение - IT проектов',
            textService: 'Доработка, сопровождение проектов различной сложности',
            imageSrc: './images/services/accompaniment.png',
            textMessage: "Здравствуйте, меня итересуют услуги по сопровождению - IT проекта",
        },
    ];

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
                                textMessage={element.textMessage}
                            />
                        ))
                    }
                </div>
                <div id="portfolio"></div>
            </div>
        </>
    )
}
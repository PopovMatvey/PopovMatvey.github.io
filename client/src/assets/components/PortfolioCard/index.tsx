import React from "react";
import './css/style.css';

/**
 * Карточка портфолио
 * @param param0 - пропс (id-карточки, изображение каточки, ссылка карточки)
 * @returns компонент "Карточка портфолио"
 */
export function PortfolioCard({ id, imageSrc, href }: any) {

    return (
        <>
            <div key={id} className="portfolio-container_assortiment__item">
                <a href={href} target="blank">
                    <img src={imageSrc} alt="Изображение пункта портфолио" />
                </a>
            </div>
        </>
    )
}
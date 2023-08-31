import React from "react";
import './css/style.css';

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
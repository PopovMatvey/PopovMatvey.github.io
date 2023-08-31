import React from "react";
import './css/style.css';

export function PortfolioCard({ id, imageSrc }: any) {

    return (
        <>
            <div key={id} className="portfolio-container_assortiment__item">
                <img src={imageSrc} alt="Изображение пункта портфолио" />
            </div>
        </>
    )
}
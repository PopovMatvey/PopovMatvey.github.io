import React from "react";
import "./css/style.css";

/**
 * Карточка услуги
 * @param param0 - пропс (Изображение услуги, заголовок услуги, текст услуги)
 * @returns компонент "Карточка услуги"
 */
export function ServiceCard({ imageSrc, titleService, textService }: any) {

    return (
        <>
            <div className="services-container-assortiment_item" >
                <div className="services-container-assortiment_item_image">
                    <img src={imageSrc} alt="Карточка услуги" />
                </div>
                <div className="services-container-assortiment_item_title">
                    <h6 >{titleService}</h6>
                </div>
                <div className="services-container-assortiment_item_text">
                    <span>
                        {textService}
                    </span>
                </div>
            </div>
        </>
    )
}
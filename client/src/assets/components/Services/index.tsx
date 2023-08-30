import React from "react";
import "./css/style.css";

import webDesign from './images/services/web-design.svg';

// Услуги
export function ServicesContainer() {



    return (
        <>
            <div className="services-container">
                <h2>Мои услуги</h2>
                <span>Что я могу Вам предложить</span>
                <div className="services-container-assortiment">

                    <div className="services-container-assortiment_item">
                        <div className="services-container-assortiment_item_image">
                            <img src={webDesign} alt="Карточка услуги" />
                        </div>
                        <div className="services-container-assortiment_item_title">
                            <h6>Веб дизайн</h6>
                        </div>
                        <div className="services-container-assortiment_item_text">
                            <span>
                                Составляется по вашему желанию в кротчайшие сроки
                            </span>
                        </div>
                    </div>

                    <div className="services-container-assortiment_item">
                        <div className="services-container-assortiment_item_image">
                            <img src={webDesign} alt="Карточка услуги" />
                        </div>
                        <div className="services-container-assortiment_item_title">
                            <h6>Веб дизайн</h6>
                        </div>
                        <div className="services-container-assortiment_item_text">
                            <span>
                                Составляется по вашему желанию в кротчайшие сроки
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
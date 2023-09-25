import React from "react";
import './css/style.css';
import firstScreenImage from '../../images/common-background.svg';

/**
 * Первый экран
 * @returns Компонент "Первый экран"
 */
export function FirstScreen() {

    /**
     * Обработчик на клик ссылки "Узнать больше"
     * @param event - объект "Событие"
     */
    const handlerHrefKnowMoreOnClick = (event: any) => {
        event.preventDefault();

        document.getElementById('know-more')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }


    return (
        <>
            <div className="first-screen_container">
                <img src={firstScreenImage} alt="первый экран" />
                <div className="first-screen_container__text-area">
                    <div className="first-screen_container__text-area___title">
                        <h2>
                            Frontend-developer
                        </h2>
                        <h2>
                            Fullsteck web-developer
                        </h2>
                    </div>
                    <div className="first-screen_container__text-area___text">
                        <span>
                            Я создаю сложное очень просто
                        </span>
                    </div>
                    <div className="first-screen_container__text-area___button">
                        <a href="#know-more" onClick={handlerHrefKnowMoreOnClick}>Узнать больше</a>
                    </div>
                </div>
                <div id="about-me"></div>
            </div>
        </>
    )
}
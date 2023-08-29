import React from "react";
import './css/style.css';
import firstScreenImage from '../../images/common-background.svg';

export function FirstScreen() {

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
                            От простого к сложному
                        </span>
                    </div>
                    <div className="first-screen_container__text-area___button">
                        <a href="#ывыв">Узнать больше</a>
                    </div>
                </div>
            </div>
        </>
    )
}
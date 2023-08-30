import React from "react";
import "./css/style.css";
import computerSVG from "./image/computer.svg";

// Моя задача
export function MyTaskContainer() {

    return (
        <>
            <div className="my-task-container">
                <div className="my-task-container_text">
                    <div className="my-task-container_text__block">
                        <div className="my-task-container_text__title">
                            <h3>
                                Моя задача
                            </h3>
                        </div>
                        <div className="my-task-container_text__span">
                            <span>
                                Основное направление - frontend разработка и поддержка сайтов
                                Я предоставляю вам качественные услуги по разумным ценам
                            </span>
                        </div>
                        <div className="my-task-container_text__button">
                            <a href="#32">Мои работы</a>
                        </div>

                    </div>
                </div>
                <div className="my-task-container_image">
                    <img src={computerSVG} alt="компьютер" />
                </div>
            </div>
        </>
    )
}
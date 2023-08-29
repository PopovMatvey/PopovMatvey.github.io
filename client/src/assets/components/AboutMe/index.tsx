import React from "react";
import './css/style.css';
import { Title } from "../Title";

// Обо мне
export function AboutMeContainer() {

    return (
        <>
            <div className="about-me-container">
                <Title title="добро пожаловать" />
                <div className="about-me-container_text">
                    <span>
                        Меня зовут Матвей Попов. Я - веб разработчик. Занимаюсь созданием сайтов под ключ любой сложности (от лендинга до интернет-магазинов и порталов).
                        Также предлагаю услуги по поддержке сайтов (доработки, размещение материалов, решение технических проблем и т.д.)
                    </span>
                    <span>
                        Если вы ищете талантливого, молодого, перспективного разработчика, имеющего огромное желание развиваться в IT-сфере, вам следует обратиться ко мне.
                    </span>
                </div>
            </div>
            {/* <div className="about-me-container_figure">
                <div className="about-me-container_figure_first-help"></div>
                <div className="about-me-container_figure_second-help"></div>
            </div> */}
            {/* <div className="about-me-container_figure_third-help"></div> */}
        </>
    )
}
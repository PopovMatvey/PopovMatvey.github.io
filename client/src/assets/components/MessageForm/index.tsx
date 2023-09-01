import React from "react";
import "./css/style.css";

// Форма связи
export function MessageForm() {
    /* Input state */
    // const 

    const phoneNumberString = "+7-(915)-627-38-29";         // Телефон
    const emailString = "popov.matvey.s62@gmail.com";       // Почта

    // Обработчик формы связи
    const handlerOnSubmitMessageForm = (event: any) => {
        event.preventDefault();
        console.log("sucsesfull");
    }

    return (
        <>
            <div className="contact-container_form">
                <div className="contact-container_form__message">
                    <h3>Мои контакты</h3>
                    <div className="contact-container_form__message__text">
                        <span>
                            С радостью отвечу на ваши вопросы
                        </span>
                        <span>
                            Вы можете использовать форму ниже или написать по адресу
                        </span>
                        <a href={`mailto:${emailString}`}>
                            {emailString}
                        </a>
                        <a href={`tel:${phoneNumberString}`}>
                            {phoneNumberString}
                        </a>
                    </div>
                </div>
                <form onSubmit={handlerOnSubmitMessageForm}>
                    <div className="contact-container_form__row">
                        <input type="text" placeholder="Имя" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="contact-container_form__row">
                        <textarea
                            name="message"
                            placeholder="Сообщение"
                        ></textarea>
                    </div>
                    <div className="contact-container_form__submit-button">
                        <input type="submit" value={"Отправить"} />
                    </div>
                </form>
            </div>
        </>
    )
}